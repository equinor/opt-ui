import { defineSemanticTokens, type SemanticTokens } from "@pandacss/dev";
import { darkPallette } from "../pallette/darkPallette";
import { lightPallette } from "../pallette/lightPallette";
import type { OptUiPresetOptions, ThemeColors } from "../types";

/**
 * Generates the pandacss semantic colors.
 *
 * @param themes - An array of theme objects to extend the theme colors.
 * @returns The generated preset semantic colors for pandacss.
 */
export function generatePresetSemanticColors(
  themes: NonNullable<OptUiPresetOptions["themes"]>
): SemanticTokens["colors"] {
  const result = {} as ThemeColors;
  for (const [colorKey, colorKeyValues] of Object.entries(lightPallette)) {
    // @ts-expect-error -- Difficult at this level to create a type safe
    result[colorKey] = {};
    for (const [colorTypeKey, color] of Object.entries(colorKeyValues)) {
      // @ts-expect-error -- Difficult at this level to create a type safe
      result[colorKey][colorTypeKey] = {
        value: {
          base: color,
          _dark: darkPallette[colorKey as never][colorTypeKey as never],
        },
      };
    }
  }
  // TODO add themes colors
  return defineSemanticTokens.colors(result);
}
