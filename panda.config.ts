import { defineConfig } from "@pandacss/dev";
import { optUiPreset } from "./packages/opt-ui-base/src";

export default defineConfig({
  presets: ["@pandacss/dev/presets", optUiPreset()],
  preflight: true,
  include: [
    // Directory starts from apps/workspace directory
    "../../packages/opt-ui-base/**/*.{ts,tsx}",
    "../../packages/opt-ui-core/**/*.{ts,tsx}",
    "../../packages/opt-ui-icons/**/*.{ts,tsx}",
  ],
  exclude: [],
  emitPackage: true,
  outdir: "@equinor/opt-ui-styled-system",
  jsxFramework: "react",
});
