/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@opt-ui/eslint-config-opt/storybook"],
  rules: {
    "import/no-unresolved": "off", // Temporal disabled
  },
};
