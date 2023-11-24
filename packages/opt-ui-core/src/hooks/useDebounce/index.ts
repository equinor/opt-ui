import { useEffect, useState } from "react";

/**
 * This React hook helps to limit that the component is re-rendered too many times.
 * Imagine that you want to execute a function on an event that executes several hundred times per second
 * such as moving the mouse or scrolling. This may cause the application to lag. To prevent this,
 * the debounce uses an internal timer to execute the callback function every xx seconds (2nd parameter).
 *
 * @param value - the value.
 * @param delay - the delay to debounce.
 *
 * @example
 * ```js
 * function Component() {
 *    const [value, setValue] = useState<string>("");
 *    const debouncedValue = useDebounce<string>(value, 500);
 *    ...
 *    return (
 *      <div>
 *        <input type="text" value={value} onChange={(e) => { setValue(event.target.value); }} />
 *      </div>
 *    );
 * }
 * ```
 */
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
