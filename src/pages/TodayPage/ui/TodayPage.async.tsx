import {lazy} from "react";
import {temp_pageLoading} from "shared/temp/temp_Tasks";

export const TodayPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./TodayPage')), temp_pageLoading)
}));