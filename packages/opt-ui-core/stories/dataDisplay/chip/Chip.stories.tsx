import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Chip } from "../../../src";

// Prop types
type Story = StoryObj<typeof Chip>;

// Base chip
export const Base: Story = {
  render: (args) => {
    return <Chip {...args}>Chip</Chip>;
  },
};

// Clickable chip
export const ClickableChip: Story = {
  render: (args) => {
    return (
      <Chip {...args} clickable>
        Clickable Chip
      </Chip>
    );
  },
};
// Clickable chip
export const CloseChip: Story = {
  render: function Render(args) {
    const [isVisible, setIsVisible] = useState(true);
    return isVisible ? (
      <Chip
        {...args}
        onClose={() => {
          setIsVisible(false);
        }}
      >
        Close Chip
      </Chip>
    ) : (
      <>{null}</>
    );
  },
};

function Icon() {
  return (
    <svg
      fill="currentColor"
      height="16px"
      role="img"
      viewBox="0 0 16 16"
      width="16px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="eds-close_small-45">close</title>
      <path
        clipRule="evenodd"
        d="M14 5.007 12.993 4 9 7.993 5.007 4 4 5.007 7.993 9 4 12.993 5.007 14 9 10.007 12.993 14 14 12.993 10.007 9 14 5.007Z"
        data-testid="eds-icon-path"
        fillRule="evenodd"
        transform="scale(0.8888888888888888)"
      />
    </svg>
  );
}
// Start Icon chip
export const StartIconChip: Story = {
  render: (args) => {
    return (
      <Chip {...args} endIcon={<Icon />} startIcon={<Icon />}>
        Chip
      </Chip>
    );
  },
};

// Defining story meta data
export default {
  title: "Data Display/Chip",
  component: Chip,
  parameters: {
    docs: {
      controls: { exclude: ["style"] },
    },
  },
  tags: ["autodocs"],
  args: {
    onClose: undefined,
  },
} satisfies Meta<typeof Chip>;
