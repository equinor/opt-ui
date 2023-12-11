import { Primary, Title } from "@storybook/addon-docs";
import { toKebabCase } from "../../../src";

// Base story
export function Base() {
  const camelCase = "camelCase";
  const pascalCase = "PascalCase";
  const snakeCase = "snake_case";
  const withSpaces = "with spaces";
  return (
    <div>
      <p>
        {camelCase} in kebab-case: <b>{toKebabCase(camelCase)}</b>
      </p>
      <p>
        {pascalCase} in kebab-case: <b>{toKebabCase(pascalCase)}</b>
      </p>
      <p>
        {snakeCase} in kebab-case: <b>{toKebabCase(snakeCase)}</b>
      </p>
      <p>
        {withSpaces} in kebab-case: <b>{toKebabCase(withSpaces)}</b>
      </p>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Functions/toKebabCase",
  component: toKebabCase,
  parameters: {
    controls: { exclude: ["style"] },
    docs: {
      page: () => (
        <>
          <Title>toKebabCase</Title>
          <p>Transform a string into kebab-case format.</p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
