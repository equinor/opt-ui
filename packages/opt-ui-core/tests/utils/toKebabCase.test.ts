import { toKebabCase } from "../../src/utils/toKebabCase";

describe("toKebabCase", () => {
  it("should convert 'camelCase' to 'camel-case'", () => {
    expect(toKebabCase("camelCase")).toBe("camel-case");
  });

  it("should convert 'PascalCase' to 'pascal-case'", () => {
    expect(toKebabCase("PascalCase")).toBe("pascal-case");
  });

  it("should convert 'snake_case' to 'snake-case'", () => {
    expect(toKebabCase("snake_case")).toBe("snake-case");
  });

  it("should convert 'with spaces' to 'with-spaces'", () => {
    expect(toKebabCase("with spaces")).toBe("with-spaces");
  });

  it("should convert 'with spaces long text' to 'with-spaces-long-text'", () => {
    expect(toKebabCase("with spaces long text")).toBe("with-spaces-long-text");
  });
});
