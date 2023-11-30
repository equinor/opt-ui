import { darkPallette, lightPallette } from "@equinor/opt-ui-core/style-system";
import type { Preview } from "@storybook/react";
import { useEffect } from "react";
import "./panda.css";

const preview: Preview = {
  decorators: [
    (Story, { globals: { backgrounds } }) => {
      const colorMode =
        backgrounds?.value === darkPallette.background.main ? "dark" : "light";
      useEffect(() => {
        window.document.documentElement.setAttribute("data-theme", "equinor");
        window.document.documentElement.setAttribute(
          "data-color-mode",
          colorMode
        );
      }, [colorMode]);
      return <Story />;
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: lightPallette.background.main,
        },
        {
          name: "dark",
          value: darkPallette.background.main,
        },
      ],
    },
  },
};

export default preview;
