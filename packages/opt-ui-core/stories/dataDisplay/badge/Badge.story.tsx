import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../../src";

type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <div>dkj</div>
      </Badge>
    );
  },
};

export default {
  title: "Data Display/Badge",
  component: Badge,
  parameters: { docs: {} },
  tags: ["autodocs"],
  argTypes: {},
  render: (args) => {
    return <Badge {...args} />;
  },
} satisfies Meta<typeof Badge>;
