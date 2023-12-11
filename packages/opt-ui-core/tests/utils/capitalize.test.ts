import { capitalize } from "../../src/utils/capitalize";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    const inputString = "hello";
    const expectedOutput = "Hello";
    expect(capitalize(inputString)).toBe(expectedOutput);
  });

  it("should  capitalize the first letter of the first word", () => {
    const inputString = "hello world";
    const expectedOutput = "Hello world";
    expect(capitalize(inputString)).toBe(expectedOutput);
  });

  it("should handle empty string", () => {
    const inputString = "";
    const expectedOutput = "";
    expect(capitalize(inputString)).toBe(expectedOutput);
  });

  it("should handle already capitalized string", () => {
    const inputString = "Capital";
    const expectedOutput = "Capital";
    expect(capitalize(inputString)).toBe(expectedOutput);
  });
});
