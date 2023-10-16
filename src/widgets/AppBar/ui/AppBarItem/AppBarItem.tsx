import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { StyledProps } from 'shared/types/types';
import icon from 'shared/assets/icons/CalendarIcon.svg';

import classNames from 'classnames';
import Icon from 'shared/assets/icons/AddButton.svg';
import styles from './AppBarItem.module.scss';

// import {AppBarItemType} from "entities/AppBar/model/AppBarItems";

interface ItemProps extends StyledProps {
    item: {
        path: string;
        text: string;
        Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    }
}

export const AppBarItem: FC<ItemProps> = ({ item, className, active }) => {
    const { pathname } = useLocation();

    // TODO: 'рефактор иконки'
    return (
        <AppLink
            to={item.path}
            className={classNames(
                styles.link,
                { [styles.active]: pathname === item.path },
                [className],
            )}
        >
            {/* <item.Icon className={styles.icon} /> */}
            <span className={styles.text}>
                <Icon className={styles.icon} />
                {item.text}
            </span>
            <div className={styles.notification}>
                {5}
            </div>
        </AppLink>
    );
};
