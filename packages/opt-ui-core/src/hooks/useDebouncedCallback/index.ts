import { useCallback, useRef } from "react";

/**
 * This react hook helps to limit the times a function is fired.
 * Imagine that you want to execute a function on an event that executes several hundred times per second
 * such as moving the mouse or scrolling. This may cause the application to lag. To prevent this,
 * the debounce uses an internal timer to execute the callback function every xx seconds (2nd parameter).
 *
 * @param callback - a callback function.
 * @param delay - the delay to debounce a function.
 *
 * @example
 * ```js
 * function Component() {
 *    ...
 *    const onChange = useDebouncedCallback((e) => { onChange(e.target.value); }, 500);
 *    ...
 *    <input type="text" onChange={onChange} />
 * }
 * ```
 */
export function useDebouncedCallback<T extends (...args: unknown[]) => void>(
  callback: T,
  delay?: number
): T {
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  return useCallback(
    (...args: unknown[]) => {
      const later = () => {
        clearTimeout(timeout.current);
        callback(...args);
      };
      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, delay || 500);
    },
    [callback, delay]
  ) as T;
}
