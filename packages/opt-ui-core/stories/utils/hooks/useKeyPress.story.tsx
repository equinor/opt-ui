import { Primary, Title } from "@storybook/addon-docs";
import { useKeyPress } from "../../../src";

// Base story
export function Base() {
  const happyPress = useKeyPress("h");
  return <div>{happyPress ? "😊" : "Press h key"}</div>;
}

// Definition
export default {
  title: "Utils/Hooks/useKeyPress",
  component: useKeyPress,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>useKeyPress</Title>
          <p>
            This hook makes it easy to detect when the user is pressing a
            specific key on their keyboard.
            <br />
            <br />
            <span style={{ color: "red" }}>
              It doesn&apos;t handle multiple keys being pressed at the same
              time.
            </span>
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
