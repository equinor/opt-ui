import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/recipes.ts"],
  format: ["cjs", "esm"],
  splitting: true,
  dts: true,
  minify: true,
  clean: true,
  external: ["@pandacss/dev", "@equinor/opt-ui-styled-system"],
});
