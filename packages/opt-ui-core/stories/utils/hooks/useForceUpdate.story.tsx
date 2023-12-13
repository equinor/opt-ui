import { Primary, Title } from "@storybook/addon-docs";
import { useRef } from "react";
import { Button, useForceUpdate } from "../../../src";

// Base story
export function Base() {
  const count = useRef(0);
  const forceUpdate = useForceUpdate();
  const handleClick = () => {
    count.current += 1;
    forceUpdate();
  };
  return (
    <div>
      <p>Count: {count.current}</p>
      <Button onClick={handleClick}>Force Render and update count</Button>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useForceUpdate",
  component: useForceUpdate,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>useForceUpdate</Title>
          <p>
            Returns a function that triggers a component update. the hook
            equivalent to <strong>this.forceUpdate()</strong> in a class
            component.
            <br />
            <br />
            In most cases using a state value with <strong>useState</strong> is
            preferable but this hook can be useful in some advanced usages of
            refs for interop or when direct DOM manipulation is required.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
