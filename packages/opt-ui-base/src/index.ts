import { definePreset } from "@pandacss/dev";
import { buttonRecipe } from "./components/button";
import type { OptUiPresetOptions } from "./types";
import { generatePresetColors } from "./utils/generatePresetColors";
import { generatePresetConditions } from "./utils/generatePresetConditions";
import { generatePresetSemanticColors } from "./utils/generatePresetSemanticColors";
import { generatePresetTextStyles } from "./utils/generatePresetTextStyles";

/**
 * Panda css preset.
 *
 * @param options - The preset options.
 * @returns the panda css preset definition.
 */
export function optUiPreset(options?: OptUiPresetOptions) {
  const themes = options?.themes || [];
  return definePreset({
    conditions: generatePresetConditions(themes),
    theme: {
      extend: {
        breakpoints: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
        tokens: {
          colors: generatePresetColors(),
        },
        semanticTokens: {
          colors: generatePresetSemanticColors(themes),
        },
        textStyles: generatePresetTextStyles(),
        recipes: {
          button: buttonRecipe,
        },
      },
    },
  });
}

// Export types
export type * from "./types";
