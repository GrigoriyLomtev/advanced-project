import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
// import testAvatar from './storybook.png';

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
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1KGy5n12lCTVO5HokLys3Q_5PoWKz2zvDxQQn8u3gXw&s',
  },
};
export const SmallAvatar: Story = {
  args: {
    size: 50,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1KGy5n12lCTVO5HokLys3Q_5PoWKz2zvDxQQn8u3gXw&s',
  },
};
