import {lazy} from "react";
import {temp_pageLoading} from "shared/temp/temp_Tasks";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), temp_pageLoading)
}));