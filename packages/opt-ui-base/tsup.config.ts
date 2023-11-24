import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["cjs", "esm"],
  splitting: true,
  dts: true,
  minify: true,
  clean: true,
  external: ["@pandacss/dev"],
});
