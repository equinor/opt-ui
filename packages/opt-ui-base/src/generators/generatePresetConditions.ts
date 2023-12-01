import type { Preset } from "@pandacss/dev";
import type { OptUiPresetOptions } from "../types";

/**
 * Generates the pandacss preset conditions.
 *
 * @param themes - An array of theme objects to extend the preset conditions.
 * @returns The generated conditions options preset for pandacss.
 */
export function generatePresetConditions(
  themes: NonNullable<OptUiPresetOptions["themes"]>
): NonNullable<Preset["conditions"]> {
  const conditions: Preset["conditions"] = {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
    equinorTheme: "[data-theme=equinor] &",
  };
  for (const theme of themes) {
    conditions[`${theme.name}Theme`] = `[data-theme=${theme.name}] &`;
  }
  return conditions;
}
