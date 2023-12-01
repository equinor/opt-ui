import { generatePresetConditions } from "../src/generators/generatePresetConditions";
import { pinkThemeColors } from "./mocks/pinkPallette";

describe("generatePresetConditions.ts", () => {
  it("should contain default conditions with empty themes", () => {
    const conditions = generatePresetConditions([]);
    expect(conditions.light).toEqual("[data-color-mode=light] &");
    expect(conditions.dark).toEqual("[data-color-mode=dark] &");
    expect(conditions.equinorTheme).toEqual("[data-theme=equinor] &");
  });

  it("should contain the default theme and custom theme", () => {
    const conditions = generatePresetConditions([
      { name: "pink", colors: pinkThemeColors },
    ]);
    expect(conditions.light).toEqual("[data-color-mode=light] &");
    expect(conditions.dark).toEqual("[data-color-mode=dark] &");
    expect(conditions.equinorTheme).toEqual("[data-theme=equinor] &");
    expect(conditions.pinkTheme).toEqual("[data-theme=pink] &");
  });
});
