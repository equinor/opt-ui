import { Primary, Title } from "@storybook/addon-docs";
import { useState } from "react";
import { useDebounce } from "../../../src";

// Base story
export function Base() {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);
  return (
    <div>
      <div>Debounced value: {debouncedValue}</div>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Type something"
        type="text"
        value={value}
      />
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useDebounce",
  component: useDebounce,
  parameters: {
    controls: { exclude: ["style"] },
    docs: {
      page: () => (
        <>
          <Title>useDebounce</Title>
          <p>
            This React hook helps to limit that the component is re-rendered too
            many times.
            <br />
            <br />
            Imagine that you want to execute a function on an event that
            executes several hundred times per second such as moving the mouse
            or scrolling. This may cause the application to lag. To prevent
            this, the debounce uses an internal timer to execute the callback
            function every xx seconds (2nd parameter).
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
