import type { Meta, StoryObj } from "@storybook/react";

import { InputText } from ".";

const meta = {
  title: "Atoms/InputText",
  component: InputText
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {}
};