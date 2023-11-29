import { definePreset } from "@pandacss/dev";
import { generatePresetColors } from "./generators/generatePresetColors";
import { generatePresetConditions } from "./generators/generatePresetConditions";
import { generatePresetSemanticColors } from "./generators/generatePresetSemanticColors";
import { generatePresetTextStyles } from "./generators/generatePresetTextStyles";
import type { OptUiPresetOptions } from "./types";

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
      },
    },
  });
}

// Export type
export type { OptUiPresetOptions } from "./types";
