import {lazy} from "react";
import {temp_pageLoading} from "shared/temp/temp_Tasks";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), temp_pageLoading)
}));