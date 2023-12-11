import { Primary, Title } from "@storybook/addon-docs";
import { capitalize } from "../../../src";

// Base story
export function Base() {
  const str1 = "mario";
  const str2 = "luigi";
  return (
    <>
      <p>
        {str1} capitalized: {capitalize(str1)}
      </p>
      <p>
        {str2} capitalized: {capitalize(str2)}
      </p>
    </>
  );
}

// Definition
export default {
  title: "Utils/Functions/capitalize",
  component: capitalize,
  parameters: {
    docs: {
      controls: { exclude: ["style"] },
      page: () => (
        <>
          <Title>capitalize</Title>
          <p>Capitalize a string.</p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
