import { useCallback, useRef } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

/**
 * Generate a react useCallback that uses a ref as a deps. This hook is useful to ONLY generate a
 * function once.
 *
 * @param callback - the callback to call.
 * @returns a useCallback function that is only generated once.
 *
 * @example
 * ```js
 * function App() {
 *    const setValue = useEventCallback(() => {
 *      ...
 *    }
 * }
 * ```
 */
export function useEventCallback<Args extends unknown[], R>(
  callback: (...args: Args) => R
) {
  const ref = useRef<typeof callback>(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  useIsomorphicLayoutEffect(() => {
    ref.current = callback;
  }, [callback]);
  return useCallback((...args: Args) => ref.current(...args), [ref]);
}
