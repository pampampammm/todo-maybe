import React, { memo, useMemo } from 'react';

import { mainAppBarItemsList } from '../../model/appBarConfig';
import { AppBarItem } from '../AppBarItem/AppBarItem';
import { AppBarList } from '../AppBarList/AppBarList';

import styles from './AppBar.module.scss';

const AppBar = memo(() => {
    const mainBarItems = useMemo(() => (
        <AppBarList placeHolder="TASKS">
            {mainAppBarItemsList.map((value) => (
                <AppBarItem
                    item={value}
                    key={value.text}
                />
            ))}
        </AppBarList>
    ), []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.contentContainer}>
                <div className={styles.header}>
                    <h2>Menu</h2>
                </div>
                <div className={styles.categoryList}>
                    {mainBarItems}
                </div>
                <div className={styles.footer} />
            </div>
        </div>
    );
});

export default AppBar;
