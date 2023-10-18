import { lazy } from 'react';
import { tempPageLoading } from 'shared/temp/temp_tasks';

export const TaskEditFormAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./TaskEditForm')), 0);
}));
