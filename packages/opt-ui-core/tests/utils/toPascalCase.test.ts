import { toPascalCase } from "../../src/utils/toPascalCase";

describe("toPascalCase", () => {
  it("should convert 'camelCase' to 'CamelCase'", () => {
    expect(toPascalCase("camelCase")).toBe("CamelCase");
  });

  it("should convert 'kebab-case' to 'KebabCase'", () => {
    expect(toPascalCase("kebab-case")).toBe("KebabCase");
  });

  it("should convert 'snake_case' to 'SnakeCase'", () => {
    expect(toPascalCase("snake_case")).toBe("SnakeCase");
  });

  it("should convert 'with spaces' to 'WithSpaces'", () => {
    expect(toPascalCase("with spaces")).toBe("WithSpaces");
  });

  it("should convert 'with spaces long text' to 'withSpacesLongText'", () => {
    expect(toPascalCase("with spaces long text")).toBe("WithSpacesLongText");
  });
});
