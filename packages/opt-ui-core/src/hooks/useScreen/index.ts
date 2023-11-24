import { useState } from "react";
import { useEventListener } from "../useEventListener";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

/**
 * Easily retrieve window.screen object with this Hook which also works onRezise.
 *
 * @example
 * ```js
 * function Component() {
 *    const screen = useScreen()
 *    ...
 *    return (
 *      <div>
 *        <p>The current window dimensions are:</p>
 *        <code>
 *          {JSON.stringify({ width: screen?.width, height: screen?.height })}
 *        </code>
 *      </div>
 *    )
 * }
 * ```
 */
export function useScreen() {
  const getScreen = () => {
    if (typeof window !== "undefined") return window.screen;
    return undefined;
  };
  const [screen, setScreen] = useState<Screen | undefined>(getScreen());
  const handleSize = () => {
    setScreen(getScreen());
  };
  useEventListener("resize", handleSize);
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);
  return screen;
}
