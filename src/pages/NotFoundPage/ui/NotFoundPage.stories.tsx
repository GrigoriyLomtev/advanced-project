import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotFoundPage } from './NotFoundPage';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    StoreDecorator({}),
  ],
} satisfies Meta<typeof NotFoundPage>;

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
