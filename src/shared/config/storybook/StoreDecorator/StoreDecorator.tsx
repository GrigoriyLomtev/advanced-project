import React from 'react';
import type { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

const StoreDecorator = (state: DeepPartial<StateSchema>) => function (Story:StoryFn) {
  return (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
  );
};
export default StoreDecorator;
