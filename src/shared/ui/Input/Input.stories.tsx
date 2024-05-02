import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    placeholder: 'Enter text',
    value: 'just text 123',
  },
};
export const DefaultInputDark: Story = {
  args: {
    placeholder: 'Enter text',
    value: 'just text 123',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
