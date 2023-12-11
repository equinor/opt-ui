import { Primary, Title } from "@storybook/addon-docs";
import { useElementSize } from "../../../src";

// Base story
export function Base() {
  const [ref, { width, height }] = useElementSize();
  return (
    <>
      <p>Resize window to see changes.</p>
      <div ref={ref} style={{ width: "100%", height: "100%" }}>
        <div>Element width: {width}</div>
        <div>Element height: {height}</div>
      </div>
    </>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useElementSize",
  component: useElementSize,
  parameters: {
    controls: { exclude: ["style"] },
    docs: {
      page: () => (
        <>
          <Title>useElementSize</Title>
          <p>
            This hook helps you to dynamically recover the width and the height
            of an HTML element. Dimensions are updated on load, on
            mount/un-mount, when resizing the window and when the ref changes.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
