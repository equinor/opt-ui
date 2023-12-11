import fs from "fs";

/**
 * Prepend a content to the start of the file.
 *
 * @param {string} filePath - The file path.
 * @param {string} content - The file content.
 */
function prependToFile(filePath, content) {
  let fileContent = fs.readFileSync(filePath, "utf8");
  const useStrictIndex = fileContent.indexOf("'use strict';");
  if (useStrictIndex !== -1) {
    fileContent =
      fileContent.slice(0, useStrictIndex + "'use strict';".length) +
      `\n${content}` +
      fileContent.slice(useStrictIndex + "'use strict';".length);
  } else {
    fileContent = `${content}\n${fileContent}`;
  }

  fs.writeFileSync(filePath, fileContent);
}

// Prepend use client
prependToFile("./dist/index.js", "'use client';");
prependToFile("./dist/index.mjs", "'use client';");
