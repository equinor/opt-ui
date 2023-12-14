import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties } from "react";
import { DotsProgress } from "../../../src";

// Prop types
type Story = StoryObj<typeof DotsProgress>;

// Base story
export const Base: Story = {
  render: ({ color, ...args }) => {
    return (
      <DotsProgress
        {...args}
        aria-label="Progress"
        color={color && "var(--color)"}
        style={
          color
            ? ({
                "--color": color,
              } as CSSProperties)
            : undefined
        }
      />
    );
  },
};

// Definition
export default {
  title: "Feedback/DotsProgress",
  component: DotsProgress,
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
} satisfies Meta<typeof DotsProgress>;
