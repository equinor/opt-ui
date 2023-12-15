import * as icons from "@equinor/eds-icons";
import { toPascalCase } from "@equinor/opt-ui-core";
import fse from "fs-extra";

/**
 * Create icon.
 *
 * @param {{name: string}} icon the icon object.
 * @param {Set} iconsNames set of icon names, just to check if a name is repeat.
 */
function createIcon(icon) {
  const { name } = icon;
  const fileName = toPascalCase(name);
  fse.writeFileSync(
    `./src/${fileName}.ts`,
    `import { createSvgIcon } from "@equinor/opt-ui-core";

export default createSvgIcon(${JSON.stringify(icon)})`
  );
  fse.appendFileSync(
    "./src/index.ts",
    `export { default as ${fileName} } from "./${fileName}";\n`
  );
}

// Run
function run() {
  try {
    fse.emptyDirSync("./src");
    fse.writeFileSync("./src/index.ts", "");
    Object.keys(icons.default).forEach((key) => {
      createIcon(icons.default[key]);
    });
  } catch (error) {
    // eslint-disable-next-line no-console -- Allow for cli script
    console.error(error);
  }
}
run();
