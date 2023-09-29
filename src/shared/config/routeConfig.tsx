import React from 'react';
import { RouteProps } from 'react-router-dom';
import { TodayPage } from 'pages/TodayPage';
import { CalendarPage } from 'pages/CalendarPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AboutPage } from '../../pages/AboutPage';
import { MainPage } from '../../pages/MainPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    TODAY = 'today',
    CALENDAR = 'calendar',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.TODAY]: '/today',
    [AppRoutes.CALENDAR]: '/calendar',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

// @ts-ignore
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.TODAY]: {
        path: RoutePath.today,
        element: <TodayPage />,
    },
    [AppRoutes.CALENDAR]: {
        path: RoutePath.calendar,
        element: <CalendarPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
