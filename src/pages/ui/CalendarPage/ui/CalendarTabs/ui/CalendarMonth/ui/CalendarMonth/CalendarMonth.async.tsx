import { FC, lazy } from 'react';
import { tempPageLoading } from 'shared/temp/temp_tasks';
import { MonthCalendarProps } from './CalendarMonth';

export const CalendarMonthAsync: FC<MonthCalendarProps> = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./CalendarMonth')), tempPageLoading);
}));
