/* eslint-disable no-alert -- Allowing it for this story */
import { Primary, Title } from "@storybook/addon-docs";
import { useState } from "react";
import { useDebouncedCallback } from "../../../src";

// Base story
export function Base() {
  const [inputValue, setInputValue] = useState<string>("");
  const handleDebounceValue = useDebouncedCallback((value: string) => {
    alert(`Debounce value ${value}`);
  }, 500);
  return (
    <div>
      <input
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
          handleDebounceValue(value);
        }}
        placeholder="Type something"
        type="text"
        value={inputValue}
      />
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useDebouncedCallback",
  component: useDebouncedCallback,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>useDebouncedCallback</Title>
          <p>
            This react hook helps to limit the times a function is fired.
            <br />
            <br />
            Imagine that you want to execute a function on an event that
            executes several hundred times per second such as moving the mouse
            or scrolling. This may cause the application to lag. To prevent
            this, the debounce uses an internal timer to execute the callback
            function every xx seconds (2nd parameter).
            <br />
            <br />
            Use this hook instead of the <strong>useDebounce</strong> when you
            want to update another state on change but still control the input
            value.
            <br />
            <br />
            This hook is ideal to for example search functionalities where you
            want to show the users what is typing without waiting but trigger a
            set state after the user stops typing that will trigger an action.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
