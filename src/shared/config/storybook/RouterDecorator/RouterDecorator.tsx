import React from 'react';
import type { StoryFn } from "@storybook/react";
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator = (Story:StoryFn) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
 export default RouterDecorator