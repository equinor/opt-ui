/**
 * Checks if the code is running on the browser or the server.
 * Also checks if is possible to use workers, event listeners and the viewport.
 *
 * @example
 * ```js
 * function Component() {
 *    const {
 *      isBrowser,
 *      isServer,
 *      canUseWorkers,
 *      canUseEventListeners,
 *      canUseViewport
 *    } = useSsr();
 *    ...
 * }
 * ```
 */
export function useSsr() {
  const isDOM =
    typeof window !== "undefined" && !!window.document.documentElement;
  return {
    isBrowser: isDOM,
    isServer: !isDOM,
    canUseWorkers: typeof Worker !== "undefined",
    canUseEventListeners: isDOM && !!window.addEventListener,
    canUseViewport: isDOM && !!window.screen,
  };
}
