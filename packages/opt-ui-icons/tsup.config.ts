import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/**/*.ts"],
  entryPoints: ["./src/index.ts"],
  format: ["esm", "cjs"],
  clean: true,
  treeshake: true,
  splitting: true,
  dts: true,
  minify: true,
  external: ["@equinor/opt-ui-core"],
});
