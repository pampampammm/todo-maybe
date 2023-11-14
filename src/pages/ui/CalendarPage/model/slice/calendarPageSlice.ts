import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarPageSchema, CalendarPageTabs } from '../types/types';

const initialState: CalendarPageSchema = {
    panel: {
        date: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
    },
    tab: CalendarPageTabs.WEEK,
};

export const calendarPageSlice = createSlice({
    name: 'addTask',
    initialState,
    reducers: {
        setPanelDate: (state, action: PayloadAction<number>) => {
            state.panel.date = action.payload;
        },
        setPanelMonth: (state, action: PayloadAction<number>) => {
            state.panel.month = action.payload;
        },
        setPanelYear: (state, action: PayloadAction<number>) => {
            state.panel.year = action.payload;
        },
        setCalendarTab: (state, action: PayloadAction<CalendarPageTabs>) => {
            state.tab = action.payload;
        },
    },

});

export const { actions: calendarPageActions } = calendarPageSlice;
export const { reducer: calendarPageReducer } = calendarPageSlice;
