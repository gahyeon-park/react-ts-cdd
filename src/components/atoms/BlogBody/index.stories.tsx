import type { Meta, StoryObj } from "@storybook/react";

import { BlogBody } from ".";

const meta = {
  title: "Atoms/BlogBody",
  component: BlogBody
} satisfies Meta<typeof BlogBody>;

export default meta;
type Story = StoryObj<typeof BlogBody>;

export const Default: Story = {
  args: {
    text: "Blog Contents body"
  }
};