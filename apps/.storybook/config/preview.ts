import type { Preview } from "@storybook/react";
import "./panda.css";

export const preview: Preview = {
  decorators: [],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
