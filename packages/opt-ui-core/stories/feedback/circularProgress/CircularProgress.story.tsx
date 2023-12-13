import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "../../../src";

// Prop types
type Story = StoryObj<typeof CircularProgress>;

// Base story
export const Base: Story = {
  args: {},
};

// Definition
export default {
  title: "Feedback/CircularProgress",
  component: CircularProgress,
  parameters: {
    docs: {
      controls: { exclude: ["style"], sort: "alpha" },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "color",
      },
    },
  },
  render: (args) => {
    return <CircularProgress {...args} />;
  },
} satisfies Meta<typeof CircularProgress>;
