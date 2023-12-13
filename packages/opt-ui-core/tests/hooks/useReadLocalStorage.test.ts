/* eslint-disable @typescript-eslint/no-dynamic-delete -- Allowing it for this tests */
import { renderHook } from "@testing-library/react";
import { useReadLocalStorage } from "../../src/hooks/useReadLocalStorage";

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
    this.store[key] = JSON.stringify(`${value}`);
  }
  removeItem(key: string) {
    delete this.store[key];
  }
}

// Tests
describe("useReadLocalStorage", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: new LocalStorageMock(),
    });
  });

  afterEach(() => {
    window.localStorage.clear();
    jest.clearAllMocks();
  });

  it("should use read local storage for a non existing item", () => {
    const { result } = renderHook(() => useReadLocalStorage("test"));
    expect(result.current).toBe(null);
  });

  it("should use read local storage for an existing item", () => {
    window.localStorage.setItem("test", "test");
    const { result } = renderHook(() => useReadLocalStorage("test"));
    expect(result.current).toBe("test");
  });
});
