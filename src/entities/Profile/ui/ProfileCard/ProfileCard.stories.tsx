import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
// import avatarImg from 'shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      age: 25,
      city: 'SPB',
      country: Country.RUSSIA,
      currency: Currency.RUB,
      first: 'Gri',
      lastname: 'Sha',
      username: 'admin',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1KGy5n12lCTVO5HokLys3Q_5PoWKz2zvDxQQn8u3gXw&s',
    },
  },
};
export const WithError: Story = {
  args: {
    error: 'error',
  },
};
export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
};
