import { useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

/**
 * Use setInterval in functional React component with the same API.
 * Set your callback function as a first parameter and a delay (in milliseconds) for the second argument.
 * You can also stop the timer passing null instead the delay or even, execute it right away passing 0.
 *
 * @param callback - the callback function.
 * @param delay - the delay in milliseconds or null to stop it.
 *
 * @example
 * ```js
 * function Component() {
 *    ...
 *    useInterval(() => {
 *      ...
 *    }, 500);
 *    ...
 * }
 * ```
 */
export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (!delay && delay !== 0) return;
    const id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);
}
