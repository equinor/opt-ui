import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  treeshake: true,
  splitting: true,
  dts: true,
  minify: true,
  clean: true,
  external: ["@equinor/opt-ui-core"],
});
