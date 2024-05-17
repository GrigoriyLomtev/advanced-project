import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
  () => new Promise((resolve) => {
    // приводим к any или можно сделать ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage') as any), 2000);
  }),
);
