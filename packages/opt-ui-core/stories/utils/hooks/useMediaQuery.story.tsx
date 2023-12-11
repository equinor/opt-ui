import { Primary, Title } from "@storybook/addon-docs";
import { useMediaQuery } from "../../../src";

// Base story
export function Base() {
  const matches = useMediaQuery("(width >= 1024px)");
  return (
    <div>
      {`The view port is ${matches ? "at least" : "less than"} 1024 pixels`}
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useMediaQuery",
  component: useMediaQuery,
  parameters: {
    controls: { exclude: ["style"] },
    docs: {
      page: () => (
        <>
          <Title>useMediaQuery</Title>
          <p>
            Easily retrieve media dimensions with this Hook which also works
            onResize.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
