import { renderHook } from "@testing-library/react";
import { usePrevious } from "../../src/hooks/usePrevious";

describe("usePrevious", () => {
  it("should return the previous value", () => {
    const initialValue = 10;
    const { result, rerender } = renderHook(() => usePrevious(initialValue));
    expect(result.current).toBe(undefined);
    rerender();
    expect(result.current).toBe(initialValue);
  });
});
