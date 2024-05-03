import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextVariant } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextComponent: Story = {
  args: {
    title: 'title title',
    text: 'text text text text text text',
  },
};
export const OnlyTitle: Story = {
  args: {
    title: 'title title',
  },
};
export const OnlyText: Story = {
  args: {
    text: 'text text text text text text',
  },
};
export const TextComponentDark: Story = {
  args: {
    title: 'title title',
    text: 'text text text text text text',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
export const TextComponentError: Story = {
  args: {
    title: 'title title',
    text: 'text text text text text text',
    variant: TextVariant.ERROR,
  },
};
