/**
 * Capitalize a string.
 *
 * @param str - The string to capitalize.
 * @returns the capitalized string.
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
