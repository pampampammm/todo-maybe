export const USER_LOCALSTORAGE_KEY = 'user';

interface DayColumn {
    label: string
    value: number
}

export const WEEK_DAYS: DayColumn[] = [{
    label: 'Monday',
    value: 1,
}, {
    label: 'Tuesday',
    value: 2,
}, {
    label: 'Wednesday',
    value: 3,
}, {
    label: 'Thursday',
    value: 4,
}, {
    label: 'Friday',
    value: 5,
}, {
    label: 'Saturday',
    value: 6,
}, {
    label: 'Sunday',
    value: 7,
}];
