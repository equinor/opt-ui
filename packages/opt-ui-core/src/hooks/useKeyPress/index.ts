import { useState } from "react";
import { useEventListener } from "../useEventListener";

/**
 * This hook makes it easy to detect when the user is pressing a specific key on their keyboard.
 *
 * ! It doesn't handle multiple keys being pressed at the same time.
 *
 * @param targetKey - the key to detect.
 * @returns true if the key is pressed, false otherwise.
 *
 * @example
 * ```js
 * function App() {
 *   const happyPress = useKeyPress("h");
 *   return <div>{happyPress ? "😊" : "Press h key"}</div>;
 * }
 * ```
 */
export function useKeyPress(targetKey: KeyboardEvent["key"]) {
  const [keyPressed, setKeyPressed] = useState(false);
  useEventListener("keydown", ({ key }: KeyboardEvent) => {
    if (targetKey === key) {
      setKeyPressed(true);
    }
  });
  useEventListener("keyup", ({ key }: KeyboardEvent) => {
    if (targetKey === key) {
      setKeyPressed(false);
    }
  });
  return keyPressed;
}
