import React, { memo, useMemo } from 'react';

import { ColoredLine } from 'shared/ui/ColoredLine/ColoredLine';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import { listAppBarItemsList, mainAppBarItemsList } from '../../model/appBarConfig';
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
                    className={styles.item}
                />
            ))}
        </AppBarList>
    ), []);

    const listBarItems = useMemo(() => (
        <AppBarList placeHolder="LISTS">
            {listAppBarItemsList.map((value) => (
                <AppBarItem
                    item={value}
                    key={value.text}
                    className={styles.item}
                />
            ))}
        </AppBarList>
    ), []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.contentContainer}>
                <div className={styles.header}>
                    <h2>Menu</h2>
                    <Input
                        placeholder="Search"
                        className={styles.headerInput}
                        theme={InputTheme.OUTLINE}
                    />
                </div>
                <div className={styles.categoryList}>
                    {mainBarItems}
                    <ColoredLine />
                    {listBarItems}
                    <ColoredLine />
                </div>
                <div className={styles.footer} />
            </div>
        </div>
    );
});

export default AppBar;
