/**
 * Transform a string in camelCase or PascalCase into kebab-case.
 *
 * @param str - The string to format.
 * @returns the string in kebab-case.
 */
export function toKebabCase(str: string) {
  return str
    .replace(/(?:^|\.?)(?<temp1>[A-Z])/g, (_, y) => `-${y.toLowerCase()}`)
    .replace(/^-/, "");
}
