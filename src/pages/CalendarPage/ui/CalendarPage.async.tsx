import {lazy} from "react";
import {temp_pageLoading} from "shared/temp/temp_Tasks";

export const CalendarPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./CalendarPage')), temp_pageLoading)
}));
