import type { Meta, StoryObj } from '@storybook/react';
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
};
