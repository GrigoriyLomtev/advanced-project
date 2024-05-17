import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
  () => new Promise((resolve) => {
    // приводим к any или можно сделать ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage') as any), 2000);
  }),
);
