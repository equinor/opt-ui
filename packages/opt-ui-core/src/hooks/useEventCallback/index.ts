import { useCallback, useRef } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

/**
 * A custom React hook that generates a `useCallback` function, ensuring that the callback
 * is only created once and retains the first version of the provided callback function.
 *
 *
 * @param callback - the callback to call.
 * @returns a useCallback function that is only generated once.
 *
 * @example
 * ```jsx
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
