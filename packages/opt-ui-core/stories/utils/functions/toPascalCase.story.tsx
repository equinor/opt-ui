import { Primary, Title } from "@storybook/addon-docs";
import { toPascalCase } from "../../../src";

// Base story
export function Base() {
  const camelCase = "camelCase";
  const kebabCase = "kebab-case";
  const snakeCase = "snake_case";
  const withSpaces = "with spaces";
  return (
    <div>
      <p>
        {camelCase} in PascalCase: <b>{toPascalCase(camelCase)}</b>
      </p>
      <p>
        {kebabCase} in PascalCase: <b>{toPascalCase(kebabCase)}</b>
      </p>
      <p>
        {snakeCase} in PascalCase: <b>{toPascalCase(snakeCase)}</b>
      </p>
      <p>
        {withSpaces} in PascalCase: <b>{toPascalCase(withSpaces)}</b>
      </p>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Functions/toPascalCase",
  component: toPascalCase,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>toPascalCase</Title>
          <p>Transform a string into PascalCase format.</p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
