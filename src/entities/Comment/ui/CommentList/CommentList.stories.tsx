import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    comments: [
      {
        id: '1',
        text: 'comment',
        user: { id: '1', username: 'user' },
      },
      {
        id: '2',
        text: 'comment 2',
        user: { id: '1', username: 'user' },
      },
    ],
  },
  decorators: [
    StoreDecorator({}),
  ],
} satisfies Meta<typeof CommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const Loading: Story = {
  args: { isLoading: true },
};

export const NoComments: Story = {
  args: { comments: [] },
};
