/* eslint-disable @typescript-eslint/no-non-null-assertion -- Allowing it for this test */
import { act, renderHook } from "@testing-library/react";
import { useElementSize } from "../../src/hooks/useElementSize";

/**
 * Resizes the specified HTML element's width or height.
 *
 * @param node - The HTML element to resize.
 * @param dimension - The dimension to resize ("width" or "height").
 * @param value - The new size value.
 * @returns The resized HTML element.
 */
function resizeElement(
  node: HTMLElement,
  dimension: "width" | "height",
  value: number
) {
  if (dimension === "height") {
    return Object.defineProperty(node, "offsetHeight", {
      configurable: true,
      value,
    });
  }
  return Object.defineProperty(node, "offsetWidth", {
    configurable: true,
    value,
  });
}

// Tests
describe("useElementSize", () => {
  const dom = document.createElement("div");
  const originalOffsetHeight = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetHeight"
  );
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetWidth"
  );

  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetHeight",
      originalOffsetHeight!
    );
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetWidth",
      originalOffsetWidth!
    );
  });

  it("should initialize", () => {
    const { result } = renderHook(() => useElementSize());
    const [setRef, size] = result.current;
    expect(typeof size.height).toBe("number");
    expect(typeof size.width).toBe("number");
    expect(setRef).toBeInstanceOf(Function);
  });

  it("should match the corresponding width", () => {
    const width1 = 360;
    const width2 = 600;
    const width3 = 1024;
    const { result, rerender } = renderHook(() => useElementSize());
    const [setRef] = result.current;

    // Check width 1
    act(() => {
      setRef(dom);
      resizeElement(dom, "width", width1);
    });
    expect(result.current[1].width).toEqual(width1);

    // Check width 2
    act(() => {
      resizeElement(dom, "width", width2);
    });
    rerender();
    expect(result.current[1].width).toEqual(width2);

    // Check width 3
    act(() => {
      resizeElement(dom, "width", width3);
    });
    rerender();
    expect(result.current[1].width).toEqual(width3);
  });

  it("should match the corresponding height", () => {
    const height1 = 360;
    const height2 = 600;
    const height3 = 1024;
    const { result, rerender } = renderHook(() => useElementSize());
    const [setRef] = result.current;

    // Check height 1
    act(() => {
      setRef(dom);
      resizeElement(dom, "height", height1);
    });
    expect(result.current[1].height).toEqual(height1);

    // Check height 2
    act(() => {
      resizeElement(dom, "height", height2);
    });
    rerender();
    expect(result.current[1].height).toEqual(height2);

    // Check height 3
    act(() => {
      resizeElement(dom, "height", height3);
    });
    rerender();
    expect(result.current[1].height).toEqual(height3);
  });
});
