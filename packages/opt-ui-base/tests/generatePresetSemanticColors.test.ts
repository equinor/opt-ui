import { generatePresetSemanticColors } from "../src/generators/generatePresetSemanticColors";
import { darkPallette } from "../src/pallette/darkPallette";
import { lightPallette } from "../src/pallette/lightPallette";
import type { ThemeColors } from "../src/types";
import { pinkThemeColors } from "./mocks/pinkPallette";

describe("generatePresetSemanticColors.ts", () => {
  it("should contain the default theme", () => {
    const semanticTokens = generatePresetSemanticColors([]);
    const primary = semanticTokens.primary as { main?: { value?: unknown } };
    expect(primary.main?.value).toEqual({
      _equinorTheme: {
        base: lightPallette.primary.main,
        _dark: darkPallette.primary.main,
      },
    });
  });

  it("should contain the default theme and a custom theme", () => {
    const semanticTokens = generatePresetSemanticColors([
      { name: "pink", colors: pinkThemeColors },
    ]);
    const primary = semanticTokens.primary as { main?: { value?: unknown } };
    expect(primary.main?.value).toEqual({
      _equinorTheme: {
        base: lightPallette.primary.main,
        _dark: darkPallette.primary.main,
      },
      _pinkTheme: pinkThemeColors.primary.main.value,
    });
  });

  it("should throw an error if a custom theme color pallette misses properties", () => {
    expect(() =>
      generatePresetSemanticColors([
        { name: "pink", colors: {} as ThemeColors },
      ])
    ).toThrow(new Error("Missing color property {primary.main} on theme pink"));
  });
});
