import { toCamelCase } from "../../src/utils/toCamelCase";

describe("toCamelCase", () => {
  it("should convert 'PascalCase' to 'pascalCase'", () => {
    expect(toCamelCase("PascalCase")).toBe("pascalCase");
  });

  it("should convert 'kebab-case' to 'kebabCase'", () => {
    expect(toCamelCase("kebab-case")).toBe("kebabCase");
  });

  it("should convert 'snake_case' to 'snakeCase'", () => {
    expect(toCamelCase("snake_case")).toBe("snakeCase");
  });

  it("should convert 'with spaces' to 'withSpaces'", () => {
    expect(toCamelCase("with spaces")).toBe("withSpaces");
  });

  it("should convert 'with spaces long text' to 'withSpacesLongText'", () => {
    expect(toCamelCase("with spaces long text")).toBe("withSpacesLongText");
  });
});
