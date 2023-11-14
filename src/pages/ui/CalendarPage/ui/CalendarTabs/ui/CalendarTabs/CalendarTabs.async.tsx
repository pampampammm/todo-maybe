import { FC, lazy } from 'react';
import { tempPageLoading } from 'shared/temp/temp_tasks';
import { TabsProps } from './CalendarTabs';

export const CalendarTabsAsync: FC<TabsProps> = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./CalendarTabs')), tempPageLoading);
}));
