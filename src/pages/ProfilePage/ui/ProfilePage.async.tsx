import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => import('./ProfilePage'));

// ? имитация подгрузки
// export const ProfilePageAsync = lazy(
//   () => new Promise((resolve) => {
//     // приводим к any или можно сделать ts-ignore
//     setTimeout(() => resolve(import('./ProfilePage') as any), 2000);
//   }),
// );
