import type { StorybookConfig } from "@storybook/react-vite";

// Storybook configuration
const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../packages/**/src/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-jest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: true,
    reactDocgen: false, // ! vite does not work with "react-docgen-typescript" atm
  },
  staticDirs: ["./static"],
};
export default config;
