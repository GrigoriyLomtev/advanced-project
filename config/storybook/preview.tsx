import React from 'react';
import type { Preview } from '@storybook/react';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
// import StoreDecorator from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import 'app/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    // StoreDecorator({}),
  ],
};

export default preview;
