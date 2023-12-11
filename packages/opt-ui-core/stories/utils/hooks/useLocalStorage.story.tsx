import { Primary, Title } from "@storybook/addon-docs";
import { Button, useLocalStorage } from "../../../src";

// Base story
export function Base() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);
  return (
    <div>
      <p>Is dark theme: {isDarkTheme ? "true" : "false"}</p>
      <Button
        onClick={() => {
          setDarkTheme(!isDarkTheme);
        }}
      >
        Toggle dark theme
      </Button>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useLocalStorage",
  component: useLocalStorage,
  parameters: {
    controls: { exclude: ["style"] },
    docs: {
      page: () => (
        <>
          <Title>useLocalStorage</Title>
          <p>
            Persist the state with local storage so that it remains after a page
            refresh.
            <br />
            <br />
            This hook is used in the same way as useState except that you must
            pass the storage key in the 1st parameter. If the window object is
            not present (as in SSR), useLocalStorage() will return the initial
            value.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
