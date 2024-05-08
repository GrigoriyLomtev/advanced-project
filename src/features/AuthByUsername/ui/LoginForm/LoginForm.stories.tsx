import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onSuccess() {
      return null;
    },
  },
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLoginForm: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: '123',
        password: '321',
      },
    }),
  ],
};
export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: '123',
        password: '321',
        error: 'error',
      },
    }),
  ],
};
export const WithLoading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: '123',
        password: '321',
        isLoading: true,
      },
    }),
  ],
};
export const LoginFormDark: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: '123',
        password: '321',
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};
