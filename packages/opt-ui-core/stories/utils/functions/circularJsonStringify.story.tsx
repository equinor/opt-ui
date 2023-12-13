/* eslint-disable @typescript-eslint/no-explicit-any -- Allowing it for this story */
import { Primary, Title } from "@storybook/addon-docs";
import { circularJsonStringify } from "../../../src";

// Base story
export function Base() {
  const circularReference = { data: 123 };
  (circularReference as any).circularData = circularReference;
  return <p>{circularJsonStringify(circularReference)}</p>;
}

// Definition
export default {
  title: "Utils/Functions/circularJsonStringify",
  component: circularJsonStringify,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>circularJsonStringify</Title>
          <p>
            Serialize an Object to string removing circular references.
            <br />
            <br />
            It helps to prevent the{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value">
              TypeError: cyclic object value
            </a>
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
