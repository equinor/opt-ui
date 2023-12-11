import { Primary, Title } from "@storybook/addon-docs";
import { useReadLocalStorage } from "../../../src";

// Base story
export function Base() {
  const darkTheme = useReadLocalStorage("darkTheme");
  return <p>DarkTheme is {darkTheme ? "enabled" : "disabled"}</p>;
}

// Definition
export default {
  title: "Utils/Hooks/useReadLocalStorage",
  component: useReadLocalStorage,
  parameters: {
    controls: { exclude: ["style"] },
    docs: {
      page: () => (
        <>
          <Title>useReadLocalStorage</Title>
          <p>
            This React Hook allows you to read a value from localStorage by its
            key. It can be useful if you just want to read without passing a
            default value.
            <br />
            <br />
            If the window object is not present (as in SSR), or if the value
            doesn&apos;t exist, `useReadLocalStorage()` will return null.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
