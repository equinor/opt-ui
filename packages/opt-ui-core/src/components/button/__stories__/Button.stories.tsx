import { css } from "@equinor/opt-ui-styled-system/css";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";

// Prop types
type Story = StoryObj<typeof Button>;

// Base button
export const Base: Story = {
  render: (args) => {
    return <Button {...args}>Button</Button>;
  },
};

// Link button
export const LinkButton: Story = {
  render: (args) => {
    return (
      <Button {...args} href="https://www.equinor.com/">
        Link Button
      </Button>
    );
  },
  args: {
    href: "https://www.equinor.com/",
  },
};

// External Link button
export const ExternalLinkButton: Story = {
  render: (args) => {
    return <Button {...args}>External link button</Button>;
  },
  args: {
    href: "https://www.equinor.com/",
    rel: "noopener noreferrer",
    target: "_blank",
  },
};

// Upload button
export const UploadButton: Story = {
  render: (args) => {
    return (
      <label htmlFor="upload-file">
        <input
          className={css({ display: "none" })}
          id="upload-file"
          type="file"
        />
        <Button {...args} as="span">
          Upload File
        </Button>
      </label>
    );
  },
};

export const FloatingActionButton: Story = {
  render: (args) => {
    return <Button {...args} />;
  },
  args: {
    "aria-label": "FAB button",
    height: "56px",
    iconSize: 24,
    // startIcon: <AddIcon />
    width: "56px",
  },
};

export const FloatingActionButtonRightCorner: Story = {
  render: (args) => {
    return <Button {...args} />;
  },
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
      controls: { exclude: ["style"] },
    },
  },
  tags: ["autodocs"],
  // argTypes: {
  //   variant: {
  //     control: { type: "radio" },
  //     options: buttonRecipe.variantMap.variant,
  //     defaultValue: "contained",
  //   },
  //   variantColor: {
  //     control: { type: "radio" },
  //     options: buttonRecipe.variantMap.variantColor,
  //     defaultValue: "primary",
  //   },
  //   fullWidth: {
  //     control: { type: "boolean" },
  //   },
  //   compact: {
  //     control: { type: "boolean" },
  //   },
  // },
} satisfies Meta<typeof Button>;
