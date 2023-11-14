import { CalendarPageAsync as CalendarPage } from './ui/CalendarPage/CalendarPage.async';
import { CalendarPageSchema } from './model/types/types';
import { calendarPageActions, calendarPageReducer } from './model/slice/calendarPageSlice';

export {
    CalendarPage,
    CalendarPageSchema,
    calendarPageReducer,
    calendarPageActions,
};
