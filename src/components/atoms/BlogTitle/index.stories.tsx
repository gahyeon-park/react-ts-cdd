import type { Meta, StoryObj } from "@storybook/react";

import { BlogTitle } from ".";

const meta = {
  title: "Atoms/BlogTitle",
  component: BlogTitle
} satisfies Meta<typeof BlogTitle>;

export default meta;
type Story = StoryObj<typeof BlogTitle>;

export const Default: Story = {
  args: {
    title: "제목"
  }
};