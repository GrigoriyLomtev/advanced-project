import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkVariant } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn(), to: '/' },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'AppLink Text Primary',
    variant: AppLinkVariant.PRIMARY,
  },
};
export const Secondary: Story = {
  args: {
    children: 'AppLink Text Secondary',
    variant: AppLinkVariant.INVERTED,
  },
};
export const PrimaryDark: Story = {
  args: {
    children: 'AppLinkDark Text Primary',
    variant: AppLinkVariant.PRIMARY,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
export const SecondaryDark: Story = {
  args: {
    children: 'AppLinkDark Text Secondary',
    variant: AppLinkVariant.INVERTED,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
