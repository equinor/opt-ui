import { Primary, Title } from "@storybook/addon-docs";
import { useState } from "react";
import { Button, usePrevious } from "../../../src";

// Base story
export function Base() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <div>
      <p>{`Now: ${count}, before: ${prevCount}`}</p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </Button>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/usePrevious",
  component: usePrevious,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>usePrevious</Title>
          <p>Tracks previous state of a value.</p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
