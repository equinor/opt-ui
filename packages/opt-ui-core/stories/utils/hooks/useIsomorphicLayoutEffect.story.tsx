import { Primary, Title } from "@storybook/addon-docs";
import { useIsomorphicLayoutEffect } from "../../../src";

// Base story
export function Base() {
  useIsomorphicLayoutEffect(() => {
    // ...
  }, []);
  return null;
}

// Definition
export default {
  title: "Utils/Hooks/useIsomorphicLayoutEffect",
  component: useIsomorphicLayoutEffect,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>useIsomorphicLayoutEffect</Title>
          <p>
            Returns <strong>useLayoutEffect</strong> or{" "}
            <strong>useEffect</strong> based on the best possible choice.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
