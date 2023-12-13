import { Primary, Title } from "@storybook/addon-docs";
import {
  Button,
  useElementSize,
  useEventCallback,
  useForceUpdate,
  usePrevious,
} from "../../../src";

// Base story
export function Base() {
  const forceUpdate = useForceUpdate();
  const setValue = useEventCallback(() => {
    forceUpdate();
  });
  const previousSetValue = usePrevious(setValue);
  return (
    <div>
      <p>
        Is callback regenerated:{" "}
        {setValue !== previousSetValue ? "true" : "false"}
      </p>
      <Button onClick={setValue}>Force Render</Button>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useEventCallback",
  component: useElementSize,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>useEventCallback</Title>
          <p>
            A custom React hook that generates a <strong>useCallback</strong>{" "}
            function, ensuring that the callback is only created once and
            retains the first version of the provided callback function.
          </p>
          <p style={{ color: "red" }}>
            This function is not a replacement for react{" "}
            <strong>useCallback</strong>, the intention of this function is to
            only generate a function once, on the first render, maintaining its
            immutability thereafter.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
