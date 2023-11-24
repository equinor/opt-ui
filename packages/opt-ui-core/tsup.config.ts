import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/server.ts", "./src/preset.ts"],
  format: ["esm", "cjs"],
  treeshake: true,
  splitting: true,
  dts: true,
  minify: true,
  clean: true,
  external: ["react", "@pandacss/dev", "@equinor/opt-ui-styled-system"],
  onSuccess: "node ./tasks/post-build.mjs",
});
