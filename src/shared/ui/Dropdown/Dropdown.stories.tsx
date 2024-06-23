import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { fn } from '@storybook/test';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    trigger: <Button>trigger</Button>,
    items: [
      { content: 'first' },
      { content: 'second' },
      { content: 'third' },
    ],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DropdownNormal: Story = {
  args: {},
};

export const DropdownDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
