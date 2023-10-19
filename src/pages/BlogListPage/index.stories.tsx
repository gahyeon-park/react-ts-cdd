import type { Meta, StoryObj } from "@storybook/react";

import { BlogListPage } from ".";

const meta = {
  title: "Templates/BlogListPage",
  component: BlogListPage
} satisfies Meta<typeof BlogListPage>;

export default meta;
type Story = StoryObj<typeof BlogListPage>;

export const Default: Story = {};
