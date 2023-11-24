import { useEffect, useRef } from "react";

/**
 * Tracks previous state of a value.
 *
 * @param value - props, state or any other calculated value.
 * @returns Value from the previous render of the enclosing component.
 *
 * @example
 * ```js
 * function Component() {
 *    const [count, setCount] = useState(0);
 *    const prevCount = usePrevious<number>(count);
 *    ...
 *    return `Now: ${count}, before: ${prevCount}`;
 * }
 * ```
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
