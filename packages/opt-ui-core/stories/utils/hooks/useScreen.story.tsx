import { Primary, Title } from "@storybook/addon-docs";
import { useScreen } from "../../../src";

// Base story
export function Base() {
  const screen = useScreen();
  return (
    <div>
      <p>The current window screen dimensions are:</p>
      <p>{JSON.stringify({ width: screen?.width, height: screen?.height })}</p>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useScreen",
  component: useScreen,
  parameters: {
    controls: { exclude: ["style"] },
    docs: {
      page: () => (
        <>
          <Title>useScreen</Title>
          <p>
            Easily retrieve window.screen object with this Hook which also works
            onRezise.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
