import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';

const meta = {
  title: 'features/editableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultEditableProfileCard: Story = {
  args: {},
};
