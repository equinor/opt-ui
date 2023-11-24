import { create } from "@storybook/theming/create";

// Create theme
export const theme = create({
  base: "light",
  // Base
  brandTitle: "OPT Frontend Core",
  brandUrl: "./",
  brandImage: "./equinor-logo-horizontal.svg#red",
  colorPrimary: "#007079",
  colorSecondary: "#007079",
  // UI
  appBg: "#FFFFFF",
  appContentBg: "#FFFFFF",
  appBorderColor: "#dce1e6",
  appBorderRadius: 4,
  // Typography
  fontBase: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
  fontCode: "Menlo, Monaco, Consolas, 'Courier New', monospace",
  // Text colors
  textColor: "#464c54",
  textInverseColor: "rgba(255,255,255,0.9)",
  // Toolbar default and active colors
  barTextColor: "#243746",
  barSelectedColor: "#007079",
  barBg: "#f1f5f9",
  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#c7d0d9",
  inputTextColor: "#464c54",
  inputBorderRadius: 4,
});
