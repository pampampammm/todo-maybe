import {lazy} from "react";

export const TodayPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./TodayPage')), 0)
}));