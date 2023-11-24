import { capitalize } from "../capitalize";
import { toCamelCase } from "../toCamelCase";

/**
 * Transform a string in kebab-case or camelCase or snake_case into PascalCase.
 *
 * @param str - The string to format.
 * @returns the string in PascalCase.
 */
export function toPascalCase(str: string) {
  return capitalize(toCamelCase(str));
}
