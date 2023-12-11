import { Primary, Title } from "@storybook/addon-docs";
import { useWindowSize } from "../../../src";

// Base story
export function Base() {
  const { width, height } = useWindowSize();
  return (
    <div>
      <p>Current window width: {width}</p>
      <p>Current window height: {height}</p>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useWindowSize",
  component: useWindowSize,
  parameters: {
    controls: { exclude: ["style"] },
    docs: {
      page: () => (
        <>
          <Title>useWindowSize</Title>
          <p>
            Easily retrieve window dimensions with this Hook React which also
            works onResize.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
