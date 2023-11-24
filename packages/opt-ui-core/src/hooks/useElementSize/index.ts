import { useCallback, useState } from "react";
import { useEventListener } from "../useEventListener";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

interface Size {
  width: number;
  height: number;
}

/**
 * This hook helps you to dynamically recover the width and the height of an HTML element.
 * Dimensions are updated on load, on mount/un-mount, when resizing the window and when the ref changes.
 *
 * @example
 * ```js
 * function Component() {
 *    const [elementRef, { width, height }] = useElementSize()
 *    ...
 *    return (
 *      <div ref={elementRef}>...</div>
 *    );
 * }
 * ```
 */
export function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Size,
] {
  const [ref, setRef] = useState<T | null>(null);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });
  }, [ref?.offsetHeight, ref?.offsetWidth]);
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, [ref?.offsetHeight, ref?.offsetWidth]);
  useEventListener("resize", handleSize);
  return [setRef, size];
}
