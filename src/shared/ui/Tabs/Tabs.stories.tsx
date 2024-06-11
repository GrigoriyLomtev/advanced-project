import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { fn } from '@storybook/test';
import { Tabs } from './Tabs';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1',
      },
      {
        value: 'tab 2',
        content: 'tab 2',
      },
      {
        value: 'tab 3',
        content: 'tab 3',
      },
    ],
    value: 'tab 2',
    onTabClick: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
