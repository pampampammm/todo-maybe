export enum CalendarPageTabs {
    MONTH = 'month',
    WEEK = 'week',
}

export interface CalendarPageSchema {
    panel?: {
        date?: number,
        month?: number,
        year?: number
    },
    tab?: CalendarPageTabs
}
