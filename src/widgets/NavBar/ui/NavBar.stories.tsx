import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NavBar } from './NavBar';

const meta = {
  title: 'widgets/NavBar',
  component: NavBar,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({}),
  ],
};
export const isAuth: Story = {
  args: {},
  decorators: [
    StoreDecorator({ user: { authData: {} } }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
  ],
};
