import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "./src/index.ts",
    "./src/server-components.ts",
    "./src/style-system.ts",
  ],
  format: ["esm", "cjs"],
  treeshake: true,
  splitting: true,
  dts: true,
  minify: true,
  clean: true,
  external: [
    "@pandacss/dev",
    "@equinor/opt-ui-styled-system",
    "react",
    "react-dom",
  ],
  onSuccess: "node ./scripts/post-build.mjs",
});
