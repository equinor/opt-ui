const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with internal libraries that utilize React.
 */
module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/react",
    "eslint-config-turbo",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
  rules: {
    // Base rules for OPT
    "unicorn/filename-case": [
      "error",
      { cases: { camelCase: true, pascalCase: true, kebabCase: true } },
    ],
    "import/no-default-export": "off",
    "import/order": "off", //  We sort imports by vs-code extension
    "no-implicit-coercion": ["error", { allow: ["!!", "+"] }],
    curly: ["error", "multi-line", "consistent"],
    // Typescript rules
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: ["enumMember"], format: ["UPPER_CASE"] },
    ],
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-enum-comparison": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-non-null-assertion": "warn",
    // React fixes
    "react/hook-use-state": "off",
    "react/jsx-no-leaked-render": "off",
    "react/no-array-index-key": "off",
  },
};
