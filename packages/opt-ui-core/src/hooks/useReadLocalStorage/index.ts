/* eslint-disable no-console -- Allow logs as indicates proper usage*/
import { useCallback, useEffect, useState } from "react";
import { useEventListener } from "../useEventListener";
import { parseJson } from "../useLocalStorage/parseJson";

type Value<T> = T | null;

/**
 * This React Hook allows you to read a value from localStorage by its key.
 * It can be useful if you just want to read without passing a default value.
 *
 * If the window object is not present (as in SSR), or if the value doesn't exist, `useReadLocalStorage()` will return null.
 *
 * @param key - the local storage key.
 * @returns the value stored or null if not present.
 *
 * @example
 * ```js
 * function App() {
 *      const darkMode = useReadLocalStorage('darkMode');
 *      return <p>DarkMode is {darkMode ? 'enabled' : 'disabled'}</p>
 * }
 * ```
 */
export function useReadLocalStorage<T>(key: string): Value<T> {
  // Get from local storage then parse stored json or return initialValue
  const readValue = useCallback((): Value<T> => {
    if (typeof window === "undefined") return null;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (parseJson(item) as T) : null;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return null;
    }
  }, [key]);

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<Value<T>>(readValue);

  // Listen if localStorage changes
  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps -- We want a clean mount effect
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
  return storedValue;
}
