import { buttonRecipe } from "@equinor/opt-ui-core/style-system";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "..";

// Prop types
type Story = StoryObj<typeof Button>;

// Base button
export const Base: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: buttonRecipe.variantMap.variant,
      defaultValue: "contained",
    },
    variantColor: {
      control: { type: "radio" },
      options: buttonRecipe.variantMap.variantColor,
      defaultValue: "primary",
    },
  },
};

// Defining story meta data
export default {
  title: "Data Entry/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      controls: { exclude: ["style"] },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;
