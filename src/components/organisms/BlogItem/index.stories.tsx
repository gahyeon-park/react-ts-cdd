import type { Meta, StoryObj } from "@storybook/react";

import { BlogItem } from ".";

const meta = {
  title: "Organisms/BlogItem",
  component: BlogItem
} satisfies Meta<typeof BlogItem>;

export default meta;
type Story = StoryObj<typeof BlogItem>;

export const Default: Story = {
  args: {
    title: "블로그 제목",
    text: "블로그 내용"
  }
};
