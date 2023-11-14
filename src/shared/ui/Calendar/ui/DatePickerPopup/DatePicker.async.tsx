import { lazy } from 'react';

export const DatePickerModalAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./DatePickerModal')), 0);
}));
