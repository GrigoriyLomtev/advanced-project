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
      { value: '3', content: '333333qweasdw333' },
      { value: '4', content: '444qweasd' },
    ],
    defaultValue: 'pick item',
  },
  decorators: [
    (Story) => <div style={{ padding: '250px' }}><Story /></div>,
  ],
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

export const TopLeft: Story = {
  args: { direction: 'top left' },
};
export const TopRightt: Story = {
  args: { direction: 'top right' },
};
export const BottomLeft: Story = {
  args: { direction: 'bottom left' },
};
export const BottomRight: Story = {
  args: { direction: 'bottom right' },
};
