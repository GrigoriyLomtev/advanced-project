import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
  () => new Promise((resolve) => {
    // приводим к any или можно сделать ts-ignore
    setTimeout(() => resolve(import('./ArticleEditPage') as any), 2000);
  }),
);
