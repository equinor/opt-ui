import { defineConfig } from "@pandacss/dev";
import { optUiPreset } from "./packages/opt-ui-base/src";

export default defineConfig({
  presets: ["@pandacss/dev/presets", optUiPreset()],
  preflight: true,
  include: [
    "../../packages/opt-ui-base/**/*.{ts,tsx}", // From apps/workspace directory
    "../../packages/opt-ui-core/**/*.{ts,tsx}", // From apps/workspace directory
  ],
  exclude: [],
  emitPackage: true,
  outdir: "@equinor/opt-ui-styled-system",
  jsxFramework: "react",
});
