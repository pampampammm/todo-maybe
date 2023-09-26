import {lazy} from "react";

export const CalendarPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./CalendarPage')), 0)
}));
