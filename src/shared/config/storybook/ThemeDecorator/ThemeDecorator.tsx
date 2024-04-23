import React from 'react';
import type { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => function (Story:StoryFn) {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
export default ThemeDecorator;
