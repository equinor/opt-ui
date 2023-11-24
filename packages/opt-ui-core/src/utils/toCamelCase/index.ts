/**
 * Transform a string in kebab-case or PascalCase or snake_case into camelCase.
 *
 * @param str - The input string to format.
 * @returns the string in camelCase.
 */
export function toCamelCase(str: string) {
  return str
    .toLowerCase()
    .replace(/(?<temp1>[-_][a-z0-9])/gi, ($1) =>
      $1.toUpperCase().replace("-", "").replace("_", "")
    );
}
