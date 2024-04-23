import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, VariantButton } from './Button';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
   
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryBtn: Story = {
  args: {
    children: 'Button Text PrimaryBtn',
    onClick: fn(),
  },
};
export const ClearBtn: Story = {
  args: {
    children: 'Button Text ClearBtn',
    variant: VariantButton.CLEAR,
    onClick: fn(),
  },
};
export const OutlineBtn: Story = {
  args: {
    children: 'Button Text OutlineBtn',
    variant: VariantButton.OUTLINE,
    onClick: fn(),
  },
};
export const OutlineBtnDark: Story = {
  args: {
    children: 'Button Text OutlineBtnDark',
    variant: VariantButton.OUTLINE,
    onClick: fn(),
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ] 
};


