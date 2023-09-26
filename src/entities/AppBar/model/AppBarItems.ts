import React from "react";
import {RoutePath} from "shared/config/routeConfig";


import AddIcon from './AddButton.svg'
import ListIcon from 'shared/assets/icons/ListIcon.svg'
import CalendarIcon from './CalendarIcon.svg'
import DoubleArrowIcon from './DoubleArrowIcon.svg'
import StickerIcon from 'src/shared/assets/icons/StickerIcon.svg'

export interface AppBarItemType {
    path: string;
    text: string;
    // Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
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
        text: 'CalendarDay',
    },
    {
        path: RoutePath.about,
        text: 'About',
    },
];

export const ListAppBarItemsList: AppBarItemType[] = [
    {
        path: RoutePath.main,
        text: 'List 1',
    },
    {
        path: RoutePath.main,
        text: 'Warning',
    },
    {
        path: RoutePath.main,
        text: 'Something List',
    },
    {
        path: RoutePath.main,
        text: 'One more "Something List"',
    },
];
