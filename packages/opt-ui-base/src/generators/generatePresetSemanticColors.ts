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
): NonNullable<SemanticTokens["colors"]> {
  const result = {} as ThemeColors;
  for (const [colorKey, colorKeyValues] of Object.entries(lightPallette)) {
    // @ts-expect-error -- Difficult at this level to create a type safe
    result[colorKey] = {};
    for (const [colorTypeKey, color] of Object.entries(colorKeyValues)) {
      // @ts-expect-error -- Difficult at this level to create a type safe
      result[colorKey][colorTypeKey] = {
        value: {
          _equinorTheme: {
            base: color,
            _dark: darkPallette[colorKey as never][colorTypeKey as never],
          },
        },
      };
      themes.forEach((theme) => {
        // @ts-expect-error -- Difficult at this level to create a type safe
        const themeColor = theme.colors[colorKey]?.[colorTypeKey]?.value;
        if (themeColor) {
          // @ts-expect-error -- Difficult at this level to create a type safe
          result[colorKey][colorTypeKey].value[`_${theme.name}Theme`] =
            themeColor;
        } else {
          throw new Error(
            `Missing color property {${colorKey}.${colorTypeKey}} on theme ${theme.name}`
          );
        }
      });
    }
  }
  return defineSemanticTokens.colors(result);
}
