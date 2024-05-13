import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Укажите значение',
    options: [
      { value: '11', content: 'Первый пункт' },
      { value: '22', content: 'Второй пункт' },
      { value: '33', content: 'Третий пункт' },
    ],
  },
};
