import { lazy } from 'react';

export const MainPageAsync = lazy(() => import('./MainPage'));

// имитация загрузки
// export const MainPageAsync = lazy(
//   () => new Promise((resolve) => {
//     // приводим к any или можно сделать ts-ignore
//     setTimeout(() => resolve(import('./MainPage') as any), 2000);
//   }),
// );
