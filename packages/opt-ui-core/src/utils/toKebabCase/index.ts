/**
 * Transform a string into kebab-case format.
 *
 * @param str - The string to format.
 * @returns the string in kebab-case.
 */
export function toKebabCase(str: string) {
  return str
    .replace(/[-_ ]+/g, "-")
    .replace(/(?:^|\.?)(?<temp1>[A-Z])/g, (_, y) => `-${y.toLowerCase()}`)
    .replace(/^-/, "");
}
