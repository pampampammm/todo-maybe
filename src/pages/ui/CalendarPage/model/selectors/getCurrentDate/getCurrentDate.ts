import { StateSchema } from 'app/StoreProvider';

export const getPanelDate = (state: StateSchema) => state.calendarPage?.panel;
export const getCalendarPageTab = (state: StateSchema) => state.calendarPage?.tab || 'week';
