import { Primary, Title } from "@storybook/addon-docs";
import { useState } from "react";
import { useInterval } from "../../../src";

// Base story
export function Base() {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, 1000);
  return <p>Count: {count}</p>;
}

// Definition
export default {
  title: "Utils/Hooks/useInterval",
  component: useInterval,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>useInterval</Title>
          <p>
            Use setInterval in functional React component with the same API.
            <br />
            Set your callback function as a first parameter and a delay (in
            milliseconds) for the second argument. You can also stop the timer
            passing null instead the delay or even execute it right away passing
            0.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
