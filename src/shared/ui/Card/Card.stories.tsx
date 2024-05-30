import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Card } from './Card';
import { Text } from '../Text/Text';

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: { children: <Text title="title" text="text text" /> },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NormalCard: Story = {
  args: {},
};
export const DarkCard: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
