/* eslint-disable no-console -- Allow logs as indicates proper usage */
import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useEventCallback } from "../useEventCallback";
import { useEventListener } from "../useEventListener";
import { parseJson } from "./parseJson";

type SetValue<T> = Dispatch<SetStateAction<T>>;
declare global {
  interface WindowEventMap {
    "local-storage": CustomEvent;
  }
}

/**
 * Persist the state with local storage so that it remains after a page refresh.
 * This hook is used in the same way as useState except that you must pass the storage key in the 1st parameter.
 * If the window object is not present (as in SSR), useLocalStorage() will return the initial value.
 *
 * @param key - the local storage key.
 * @param initialValue - the initial value.
 * @returns [value, setValue]
 *
 * @example
 * ```js
 * function App() {
 *      const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true);
 *      ...
 * }
 * ```
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  const readValue = useCallback((): T => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (parseJson(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Define set value into the local storage.
  const setValue: SetValue<T> = useEventCallback((value) => {
    if (typeof window === "undefined") {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`
      );
    }
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new Event("local-storage")); // We dispatch a custom event so every useLocalStorage hook are notified
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  });

  // Sync stored value on mount.
  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps -- We want a clean mount effect.
  }, []);

  // Handle to set the new value when value changes.
  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if (
        (event as StorageEvent | undefined)?.key &&
        (event as StorageEvent).key !== key
      ) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue]
  );

  // Set event listeners
  useEventListener("storage", handleStorageChange);
  useEventListener("local-storage", handleStorageChange); // Custom event, triggered in writeValueToLocalStorage

  // Return stored value and set action.
  return [storedValue, setValue];
}
