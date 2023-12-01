import { generatePresetTextStyles } from "../src/generators/generatePresetTextStyles";

describe("generatePresetTextStyles.ts", () => {
  it("should not contain the property color", () => {
    const textStyles = generatePresetTextStyles();
    Object.values(textStyles).forEach((style) => {
      expect(style.value).not.toHaveProperty("color");
    });
  });
});
