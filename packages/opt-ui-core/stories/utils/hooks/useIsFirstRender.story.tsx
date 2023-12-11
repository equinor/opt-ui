import { Primary, Title } from "@storybook/addon-docs";
import { Button, useForceUpdate, useIsFirstRender } from "../../../src";

// Base story
export function Base() {
  const isFirstRender = useIsFirstRender();
  const forceUpdate = useForceUpdate();
  return (
    <div>
      <p>Is first render: {isFirstRender ? "true" : "false"}</p>
      <Button
        onClick={() => {
          forceUpdate();
        }}
      >
        ForceUpdate
      </Button>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useIsFirstRender",
  component: useIsFirstRender,
  parameters: {
    controls: { exclude: ["style"] },
    docs: {
      page: () => (
        <>
          <Title>useIsFirstRender</Title>
          <p>Hook to check if the component is in his first render.</p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
