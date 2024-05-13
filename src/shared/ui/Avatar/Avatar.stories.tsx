import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import testAvatar from './storybook.png';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 150,
    src: testAvatar,
  },
};
export const SmallAvatar: Story = {
  args: {
    size: 50,
    src: testAvatar,
  },
};
