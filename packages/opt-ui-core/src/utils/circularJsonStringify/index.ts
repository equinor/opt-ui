/**
 * @returns a JSON.stringify replacer function that controls the cyclic references.
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
 * Serialize an Object to string removing cyclic references.
 *
 * @param object - The object to serialize.
 * @returns a json stringify function that removes cyclic references.
 */
export function circularJsonStringify(object: object) {
  return JSON.stringify(object, getCircularReplacer());
}
