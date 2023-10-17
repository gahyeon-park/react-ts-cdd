import type { Meta, StoryObj } from '@storybook/react';

import { Button } from ".";

const meta = {
  title: "Atoms/Button",
  component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "기본 버튼"
  }
};