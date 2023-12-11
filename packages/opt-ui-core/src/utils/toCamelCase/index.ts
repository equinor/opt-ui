import { toKebabCase } from "../toKebabCase";

/**
 * Transform a string into camelCase format.
 *
 * @param str - The input string to format.
 * @returns the string in camelCase.
 */
export function toCamelCase(str: string) {
  return toKebabCase(str)
    .replace(/[-_ ]+/g, " ")
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}
