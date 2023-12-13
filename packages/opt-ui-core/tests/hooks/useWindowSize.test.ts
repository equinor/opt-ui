import { act, renderHook } from "@testing-library/react";
import { useWindowSize } from "../../src/hooks/useWindowSize";

/**
 * Simulates a window resize by adjusting the specified dimension of the window.
 * Triggers the "resize" event after the adjustment.
 *
 * @param dimension - The dimension to adjust ("width" or "height").
 * @param value - The new size value for the specified dimension.
 */
function windowResize(dimension: "width" | "height", value: number) {
  if (dimension === "width") {
    window.innerWidth = value;
  }
  if (dimension === "height") {
    window.innerHeight = value;
  }
  window.dispatchEvent(new Event("resize"));
}

// Tests
describe("useWindowSize", () => {
  it("should initialize", () => {
    const { result } = renderHook(() => useWindowSize());
    const { height, width } = result.current;
    expect(typeof height).toBe("number");
    expect(typeof width).toBe("number");
  });

  it("should return the corresponding width", () => {
    const { result } = renderHook(() => useWindowSize());
    act(() => {
      windowResize("width", 420);
    });
    expect(result.current.width).toBe(420);
    act(() => {
      windowResize("width", 2196);
    });
    expect(result.current.width).toBe(2196);
  });

  it("should return the corresponding height", () => {
    const { result } = renderHook(() => useWindowSize());
    act(() => {
      windowResize("height", 420);
    });
    expect(result.current.height).toBe(420);
    act(() => {
      windowResize("height", 2196);
    });
    expect(result.current.height).toBe(2196);
  });
});
