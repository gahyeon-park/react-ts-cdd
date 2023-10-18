import type { Meta, StoryObj } from "@storybook/react";

import { BlogPost } from ".";

const meta = {
  title: "Organisms/BlogPost",
  component: BlogPost
} satisfies Meta<typeof BlogPost>;

export default meta;
type Story = StoryObj<typeof BlogPost>;

export const Default: Story = {};
