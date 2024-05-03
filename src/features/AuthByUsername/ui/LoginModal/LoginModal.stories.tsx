import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';

const meta = {
  title: 'features/LoginModal',
  component: LoginModal,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoginModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLoginModal: Story = {
  args: {
    onClose: null,
    isOpen: true,
  },
  decorators: [
    StoreDecorator({
      loginForm: {
        username: '123',
        password: '321',
      },
    }),
  ],
};
export const DarkLoginModal: Story = {
  args: {
    onClose: null,
    isOpen: true,
  },
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
