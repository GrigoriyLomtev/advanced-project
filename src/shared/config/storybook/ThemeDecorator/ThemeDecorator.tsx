import React from 'react';
import type { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => function (Story:StoryFn) {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
export default ThemeDecorator;
