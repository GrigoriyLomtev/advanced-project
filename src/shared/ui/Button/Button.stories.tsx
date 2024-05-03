import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonVariant } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryBtn: Story = {
  args: {
    children: 'PrimaryBtn',
    onClick: fn(),
  },
};

export const Disabled: Story = {
  args: {
    children: 'PrimaryBtnDisabled',
    disabled: true,
    variant: ButtonVariant.OUTLINE,
  },
};

export const ClearBtn: Story = {
  args: {
    children: 'ClearBtn',
    variant: ButtonVariant.CLEAR,
  },
};
export const ClearInvertedBtn: Story = {
  args: {
    children: 'ClearInvertedBtn',
    variant: ButtonVariant.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: ButtonVariant.OUTLINE,
  },
};
export const OutlineSizeM: Story = {
  args: {
    children: 'OutlineM',
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.M,
  },
};
export const OutlineSizeL: Story = {
  args: {
    children: 'OutlineL',
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.L,
  },
};
export const OutlineSizeXL: Story = {
  args: {
    children: 'OutlineXL',
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'OutlineDark',
    variant: ButtonVariant.OUTLINE,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const BackgroundBtn: Story = {
  args: {
    children: 'BackgroundBtn',
    variant: ButtonVariant.BACKGROUND,
  },
};

export const BackgroundInvertedBtn: Story = {
  args: {
    children: 'BackgroundInvertedBtn',
    variant: ButtonVariant.BACKGROUND_INVERTED,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};
