import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () => new Promise((resolve) => {
    // приводим к any или можно сделать ts-ignore
    setTimeout(() => resolve(import('./AboutPage') as any), 2000);
  }),
);
