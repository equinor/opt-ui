/**
 * A wrapper for "JSON.parse()"" to support "undefined" value.
 *
 * @param value - the value to parse.
 * @returns the string parsed or undefined.
 */
export function parseJson<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    // eslint-disable-next-line no-console -- allow console error
    console.error("parsing error on", { value });
    return undefined;
  }
}
