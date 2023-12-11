import { Primary, Title } from "@storybook/addon-docs";
import { toCamelCase } from "../../../src";

// Base story
export function Base() {
  const pascalCase = "PascalCase";
  const kebabCase = "kebab-case";
  const snakeCase = "snake_case";
  const withSpaces = "with spaces";
  return (
    <div>
      <p>
        {pascalCase} in camelCase: <b>{toCamelCase(pascalCase)}</b>
      </p>
      <p>
        {kebabCase} in camelCase:<b>{toCamelCase(kebabCase)}</b>
      </p>
      <p>
        {snakeCase} in camelCase: <b>{toCamelCase(snakeCase)}</b>
      </p>
      <p>
        {withSpaces} in camelCase: <b>{toCamelCase(withSpaces)}</b>
      </p>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Functions/toCamelCase",
  component: toCamelCase,
  parameters: {
    controls: { exclude: ["style"] },
    docs: {
      page: () => (
        <>
          <Title>toCamelCase</Title>
          <p>Transform a string into camelCase format.</p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
