import { MainPageAsync as MainPage } from './ui/MainPage/ui/MainPage/MainPage.async';
import { CalendarPageAsync as CalendarPage } from './ui/CalendarPage/ui/CalendarPage/CalendarPage.async';
import { AboutPageAsync as AboutPage } from './ui/AboutPage/AboutPage.async';
import { TodayPageAsync as TodayPage } from './ui/TodayPage/TodayPage.async';
import NotFoundPage from './ui/NotFoundPage/NotFoundPage';
import { PageSchema } from './model/types/type';

export {
    PageSchema,
    MainPage,
    TodayPage,
    CalendarPage,
    AboutPage,
    NotFoundPage,
};
