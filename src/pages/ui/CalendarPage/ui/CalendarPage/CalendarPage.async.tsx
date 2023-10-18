import { lazy } from 'react';
import { tempPageLoading } from 'shared/temp/temp_tasks';

export const CalendarPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./CalendarPage')), tempPageLoading);
}));
