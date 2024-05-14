import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
// import avatarImg from 'shared/assets/tests/storybook.png';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
