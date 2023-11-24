import { optUiPreset } from "@equinor/opt-ui-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/dev/presets", optUiPreset()],
  preflight: true,
  include: ["./src/**/*.{ts,tsx}"],
  exclude: [],
  emitPackage: true,
  outdir: "@equinor/opt-ui-styled-system",
  jsxFramework: "react",
});
