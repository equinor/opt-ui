import { optUiPreset } from "@equinor/opt-ui-core/preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/dev/presets", optUiPreset()],
  preflight: true,
  include: [
    "./node_modules/@equinor/opt-ui-styled-system/**/*.js",
    "./src/**/*.{ts,tsx}",
  ],
  exclude: [],
  emitPackage: true,
  outdir: "@equinor/opt-ui-styled-system",
  jsxFramework: "react",
});
