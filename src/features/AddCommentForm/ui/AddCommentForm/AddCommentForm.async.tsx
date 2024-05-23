import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () => new Promise((resolve) => {
    // приводим к any или можно сделать ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm') as any), 2000);
  }),
);
