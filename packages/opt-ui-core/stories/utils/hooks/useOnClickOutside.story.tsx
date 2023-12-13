/* eslint-disable no-alert -- Allowing it for this story */
import { Primary, Title } from "@storybook/addon-docs";
import { useRef } from "react";
import { useOnClickOutside } from "../../../src";

// Base story
export function Base() {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    alert("Click outside box");
  });
  return (
    <div
      ref={ref}
      style={{ width: "300px", height: "300px", border: "1px solid black" }}
    >
      Click outside this box
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useOnClickOutside",
  component: useOnClickOutside,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>useOnClickOutside</Title>
          <p>
            React hook for listening for clicks outside of a specified element.
            This can be useful for closing a modal, a dropdown menu etc.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
