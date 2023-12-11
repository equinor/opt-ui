import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../src";

// Prop types
type Story = StoryObj<typeof Button>;

// Base button
export const Base: Story = {
  args: {
    children: "Button",
  },
};

// Link button
export const LinkButton: Story = {
  args: {
    children: "Link Button",
    as: "a",
    href: "https://www.equinor.com/",
  },
};

// External Link button
export const ExternalLinkButton: Story = {
  args: {
    children: "External Link Button",
    as: "a",
    href: "https://www.equinor.com/",
    rel: "noopener noreferrer",
    target: "_blank",
  },
};

// Upload button
export const UploadButton: Story = {
  render: (args) => {
    return (
      <Button {...args} as="label">
        <input type="file" />
      </Button>
    );
  },
};

export const DisabledButton: Story = {
  args: {
    children: "Disabled button",
    disabled: true,
  },
};

export const FloatingActionButton: Story = {
  args: {
    "aria-label": "FAB button",
    height: "56px",
    iconSize: 24,
    startIcon: <span>T</span>,
    width: "56px",
  },
};

export const FloatingActionButtonRightCorner: Story = {
  args: {
    "aria-label": "FAB button",
    bottom: "16px",
    height: "56px",
    iconSize: 24,
    position: "fixed",
    right: "16px",
    // startIcon: <AddIcon />
    width: "56px",
  },
};

// Defining story meta data
export default {
  title: "Data Entry/Button",
  component: Button,
  parameters: {
    docs: {
      // controls: { exclude: ["style"] },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    //   ...generateArgTypesFromRecipe(buttonRecipe),
    //   ...generateAsArgType(),
    //   ...generateArgType<ButtonProps>("href", "text"),
    //   ...generateArgType<ButtonProps>("disableRipple", "boolean"),
    //   ...generateArgType<ButtonProps>("iconSize", "number"),
  },
  render: (args) => {
    return <Button {...args} />;
  },
} satisfies Meta<typeof Button>;
