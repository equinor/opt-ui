/* eslint-disable @typescript-eslint/no-dynamic-delete -- Allowing it for this test */
import { act, renderHook } from "@testing-library/react";
import { useLocalStorage } from "../../src/hooks/useLocalStorage";

/**
 * Mock class for local storage, providing an in-memory replacement for the localStorage API.
 */
class LocalStorageMock {
  store: Record<string, unknown> = {};
  clear() {
    this.store = {};
  }
  getItem(key: string) {
    return this.store[key] || null;
  }
  setItem(key: string, value: unknown) {
    this.store[key] = `${value}`;
  }
  removeItem(key: string) {
    delete this.store[key];
  }
}

// Tests
describe("useLocalStorage", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: new LocalStorageMock(),
    });
  });

  afterEach(() => {
    window.localStorage.clear();
    jest.clearAllMocks();
  });

  it("initial state is in the returned state", () => {
    const { result } = renderHook(() => useLocalStorage("key", "value"));
    expect(result.current[0]).toBe("value");
  });

  it("Initial state is a callback function", () => {
    const { result } = renderHook(() => useLocalStorage("key", () => "value"));
    expect(result.current[0]).toBe("value");
  });

  it("Initial state is an array", () => {
    const { result } = renderHook(() => useLocalStorage("digits", [1, 2]));
    expect(result.current[0]).toEqual([1, 2]);
  });

  it("Update the state", () => {
    const { result } = renderHook(() => useLocalStorage("key", "value"));
    act(() => {
      const setState = result.current[1];
      setState("edited");
    });
    expect(result.current[0]).toBe("edited");
  });

  it("Update the state writes localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("key", "value"));
    act(() => {
      const setState = result.current[1];
      setState("edited");
    });
    expect(window.localStorage.getItem("key")).toBe(JSON.stringify("edited"));
  });

  it("Update the state with undefined", () => {
    const { result } = renderHook(() =>
      useLocalStorage<string | undefined>("key", "value")
    );
    act(() => {
      const setState = result.current[1];
      setState(undefined);
    });
    expect(result.current[0]).toBeUndefined();
  });

  it("Update the state with null", () => {
    const { result } = renderHook(() =>
      useLocalStorage<string | null>("key", "value")
    );
    act(() => {
      const setState = result.current[1];
      setState(null);
    });
    expect(result.current[0]).toBeNull();
  });

  it("Update the state with a callback function", () => {
    const { result } = renderHook(() => useLocalStorage("count", 2));
    act(() => {
      const setState = result.current[1];
      setState((prev) => prev + 1);
    });
    expect(result.current[0]).toBe(3);
    expect(window.localStorage.getItem("count")).toEqual("3");
  });

  it("[Event] Update one hook updates the others", () => {
    const initialValues: [string, unknown] = ["key", "initial"];
    const { result: A } = renderHook(() => useLocalStorage(...initialValues));
    const { result: B } = renderHook(() => useLocalStorage(...initialValues));
    act(() => {
      const setState = A.current[1];
      setState("edited");
    });
    expect(B.current[0]).toBe("edited");
  });

  it("setValue is referentially stable", () => {
    const { result } = renderHook(() => useLocalStorage("count", 1));

    // Store a reference to the original setValue
    const originalCallback = result.current[1];

    // Invoke a state update, if setValue is not referentially stable then this will cause the originalCallback
    // reference to not be equal to the new setValue function
    act(() => {
      const setState = result.current[1];
      setState((prev) => prev + 1);
    });

    expect(result.current[1] === originalCallback).toBe(true);
  });
});
