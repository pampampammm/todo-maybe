import React from 'react';
import { RoutePath } from 'shared/config/routeConfig';

export interface AppBarItemType {
    path: string;
    text: string;
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const MainAppBarItemsList: AppBarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Tasks',
    },
    {
        path: RoutePath.today,
        text: 'Today',
    },
    {
        path: RoutePath.calendar,
        text: 'Calendar',
    },
    {
        path: RoutePath.about,
        text: 'About',
    },
];

export const ListAppBarItemsList: AppBarItemType[] = [
    {
        path: RoutePath.not_found,
        text: 'List 1',
    },
    {
        path: RoutePath.not_found,
        text: 'Warning',
    },
    {
        path: RoutePath.not_found,
        text: 'Something List',
    },
    {
        path: RoutePath.not_found,
        text: 'Primary',
    },
];
