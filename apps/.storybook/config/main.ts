import type { StorybookConfig } from "@storybook/react-vite";

// Storybook configuration
const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.@(stories|story).@(js|jsx|mjs|ts|tsx)",
    "../../../packages/**/stories/**/*.@(stories|story).@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
    builder: "@storybook/builder-vite",
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // shouldExtractValuesFromUnion: true,
      include: ["../../packages/opt-ui-core/**/**.tsx"],
    },
  },
  staticDirs: ["./static"],
};
export default config;
