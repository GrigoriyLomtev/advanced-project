import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NormalModal: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vitae aspernatur harum eaque quasi iusto esse blanditiis voluptas ipsum! Ab.',
  },
};
export const DarkModal: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vitae aspernatur harum eaque quasi iusto esse blanditiis voluptas ipsum! Ab.',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
