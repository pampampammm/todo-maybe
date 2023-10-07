import React, { memo, useMemo, useState } from 'react';

import { ColoredLine } from 'shared/ui/ColoredLine/ColoredLine';
import Input, { InputSize, InputTheme } from 'shared/ui/Input/Input';
import { ListAppBarItemsList, MainAppBarItemsList } from 'widgets/AppBar/model/AppBarItems';
import { useAppDispatch } from 'app/StoreProvider';
import { selectAuthUserData } from 'entities/User';
import { useSelector } from 'react-redux';
import { selectLoginLoading } from 'features/authByUserName/model/selectors/selectLoginState/selectLoginLoading';
import { AppBarItem } from '../AppBarItem/AppBarItem';
import { AppBarList } from '../AppBarList/AppBarList';

import styles from './AppBar.module.scss';

const AppBar = memo(() => {
    const [modal, setModal] = useState(false);

    const dispath = useAppDispatch();
    const authData = useSelector(selectAuthUserData);
    const isLoading = useSelector(selectLoginLoading);

    const mainBarItems = useMemo(() => (
        <AppBarList placeHolder="TASKS">
            {MainAppBarItemsList.map((value) => (
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
            {ListAppBarItemsList.map((value) => (
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
