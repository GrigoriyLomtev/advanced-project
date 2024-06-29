import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoComments: Story = {
  args: { },
};
