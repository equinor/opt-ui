import { renderHook } from "@testing-library/react";
import { useInterval } from "../../src/hooks/useInterval";

/**
 * Mocks the global setInterval function using Jest's fake timers.
 * This function should be called before testing code that involves intervals.
 */
function mockSetInterval() {
  jest.useFakeTimers();
  jest.spyOn(global, "setInterval");
}

/**
 * Mocks the global clearInterval function using Jest's fake timers.
 * This function should be called before testing code that involves intervals.
 */
function mockClearInterval() {
  jest.useFakeTimers();
  jest.spyOn(global, "clearInterval");
}

/**
 * Delays the execution for the specified duration.
 *
 * @param ms - The duration to sleep in milliseconds.
 * @returns A promise that resolves after the specified duration.
 */
function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Tests
describe("useInterval", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fire the callback function (1)", async () => {
    const timeout = 500;
    const callback = jest.fn();
    renderHook(() => {
      useInterval(callback, timeout);
    });
    await sleep(timeout);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should fire the callback function (2)", async () => {
    const timeout = 500;
    const earlyTimeout = 400;
    const callback = jest.fn();
    renderHook(() => {
      useInterval(callback, timeout);
    });
    await sleep(earlyTimeout);
    expect(callback).not.toHaveBeenCalled();
  });

  it("should call set interval on start", () => {
    const timeout = 1200;
    mockSetInterval();
    const callback = jest.fn();
    renderHook(() => {
      useInterval(callback, timeout);
    });
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), timeout);
  });

  it("should call clearTimeout on unmount", () => {
    mockClearInterval();
    const callback = jest.fn();
    const { unmount } = renderHook(() => {
      useInterval(callback, 1200);
    });
    unmount();
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
});
