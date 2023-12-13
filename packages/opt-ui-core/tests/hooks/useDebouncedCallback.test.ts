import { act, renderHook } from "@testing-library/react";
import { useDebouncedCallback } from "../../src/hooks/useDebouncedCallback";

// Tests
describe("useDebouncedCallback", () => {
  const mockCallback = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    mockCallback.mockReset();
    jest.clearAllTimers();
  });

  it("should use default debounce delay if not provided", () => {
    const defaultDelay = 500;
    const {
      result: { current: debouncedCallback },
    } = renderHook(() => useDebouncedCallback(mockCallback));
    debouncedCallback();
    expect(mockCallback).not.toHaveBeenCalled();
    act(() => {
      jest.advanceTimersByTime(defaultDelay);
    });
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it("should debounce the callback function with custom delay", () => {
    const delay = 1000;
    const {
      result: { current: debouncedCallback },
    } = renderHook(() => useDebouncedCallback(mockCallback, delay));
    debouncedCallback("test");
    expect(mockCallback).not.toHaveBeenCalled();
    act(() => {
      jest.advanceTimersByTime(delay);
    });
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith("test");
  });
});
