import { Accessible } from "@equinor/opt-ui-icons";
import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties } from "react";
import { Icon, createSvgIcon } from "../../../src";

// Prop types
type Story = StoryObj<typeof Icon>;

// Base story
export const Base: Story = {
  render: ({ color, ...args }) => {
    return (
      <Icon
        {...args}
        aria-label="Icon"
        color={color && "var(--color)"}
        style={
          color
            ? ({
                "--color": color,
              } as CSSProperties)
            : undefined
        }
      >
        <svg
          fill="none"
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M40.6885 0H7.31128C3.17877 0 0 3.49658 0 7.31128V40.6887C0 44.821 3.49661 48 7.31128 48H40.6887C44.5034 48 47.6821 44.8213 48 40.6887V7.31128C47.9998 3.17871 44.5032 0 40.6885 0ZM44.821 41.0063C44.821 43.2317 42.9137 45.1387 40.6887 45.1387H7.31128C5.08609 45.1387 3.17896 43.2314 3.17896 41.0063V7.62915C3.17896 5.40405 5.08627 3.49683 7.31128 3.49683H40.6887C42.9139 3.49683 44.821 5.40405 44.821 7.62915V41.0063ZM23.7586 35.6924C24.7782 35.6924 25.6048 34.8657 25.6048 33.8462C25.6048 32.8267 24.7782 32 23.7586 32C22.739 32 21.9124 32.8267 21.9124 33.8462C21.9124 34.8657 22.739 35.6924 23.7586 35.6924ZM20.0471 13.3508C21.459 12.2214 23.4353 11.6567 25.1295 12.2214C27.3883 12.7861 29.3647 14.4805 29.9295 17.0215C30.4942 19.2803 29.6472 21.5393 27.6707 23.2334C26.2588 24.3628 25.1295 26.0569 25.1295 27.751C25.412 28.5981 24.8472 29.1628 24.0002 29.1628C23.153 29.1628 22.5883 28.5979 22.5883 27.751C22.5883 25.21 23.7178 22.6687 25.9767 20.9746C27.106 20.1274 27.3883 18.998 27.106 17.5862C26.8237 16.4568 25.9767 15.3274 24.5648 15.0449C23.4355 14.7627 22.5883 15.0449 21.7413 15.6096C20.8943 16.1743 20.612 17.304 20.612 18.1509C20.612 18.998 20.0471 19.5627 19.2002 19.5627C18.353 19.5627 17.7883 18.9978 17.7883 18.1509C17.7883 16.1743 18.6353 14.4802 20.0471 13.3508Z"
            fill="black"
            fillRule="evenodd"
          />
        </svg>
      </Icon>
    );
  },
};

// With createSvg
export const WithCreateSvgIcon: Story = {
  render: ({ color, ...args }) => {
    const ClearIcon = createSvgIcon({
      name: "clear",
      prefix: "eds",
      height: "24",
      width: "24",
      svgPathData:
        "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
    });
    ClearIcon.displayName = "ClearIcon"; // For storybook to display the proper component name
    return (
      <ClearIcon
        {...args}
        aria-label="Icon"
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

// Using opt-ui-icons
export const UsingOptUiIcons: Story = {
  render: ({ color, ...args }) => {
    Accessible.displayName = "Accessible"; // For storybook to display the proper component name
    return (
      <Accessible
        {...args}
        aria-label="Icon"
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

// Defining story meta data
export default {
  title: "Data Display/Icon",
  component: Icon,
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
} satisfies Meta<typeof Icon>;
