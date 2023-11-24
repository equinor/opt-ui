import { useState } from "react";
import { useEventListener } from "../useEventListener";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Easily retrieve window dimensions with this Hook React which also works onResize.
 *
 * @example
 * ```js
 * function Component() {
 *    const { width, height } = useWindowSize()
 *    ...
 * }
 * ```
 */
export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });
  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEventListener("resize", handleSize);
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);
  return windowSize;
}
