import type { Meta, StoryObj } from "@storybook/react";
import { Ripple } from "../../../src";

// Prop types
type Story = StoryObj<typeof Ripple>;

// Base story
export const Base: Story = {
  render: (args) => {
    return (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "200px",
          height: "100px",
          border: "1px black solid",
        }}
      >
        Click me
        <Ripple {...args} />
      </div>
    );
  },
};

// Defining story meta data
export default {
  title: "Utils/Ripple",
  component: Ripple,
  parameters: {
    docs: {
      controls: { exclude: ["style"] },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: {
        type: "color",
      },
    },
  },
} satisfies Meta<typeof Ripple>;
