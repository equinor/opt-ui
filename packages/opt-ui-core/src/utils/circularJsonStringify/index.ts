/**
 * @returns a JSON.stringify replacer function that controls the circular dependencies.
 */
function getCircularReplacer() {
  const seen = new WeakSet();
  return function stringify(_: string, value: unknown) {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
}

/**
 * Serialize an Object to string with circular references.
 *
 * @param object - The object to serialize.
 * @returns a json stringify with circular dependencies.
 */
export function circularJsonStringify(object: object) {
  return JSON.stringify(object, getCircularReplacer());
}
