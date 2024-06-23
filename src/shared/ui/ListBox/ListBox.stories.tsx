import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { fn } from '@storybook/test';
import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onChange: fn(),
    items: [
      { value: '1', content: '123' },
      { value: '2', content: '2222', disabled: true },
      { value: '3', content: '333333333' },
      { value: '4', content: '444' },
    ],
    defaultValue: 'pick item',
  },
} satisfies Meta<typeof ListBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ListBoxNormal: Story = {
  args: {},
};

export const ListBoxDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const ListBoxTopDirection: Story = {
  args: { direction: 'top' },
};
