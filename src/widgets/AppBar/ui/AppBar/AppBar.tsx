import React, { useMemo, useState } from 'react';

import { ColoredLine } from 'shared/ui/ColoredLine/ColoredLine';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import { ListAppBarItemsList, MainAppBarItemsList } from 'widgets/AppBar/model/AppBarItems';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'app/StoreProvider';
import { selectAuthUserData, userActions } from 'entities/User';
import { useSelector } from 'react-redux';
import { LoginModal } from 'features/authByUserName';
import { AppBarItem } from '../AppBarItem/AppBarItem';
import { AppBarList } from '../AppBarList/AppBarList';

import styles from './AppBar.module.scss';

const AppBar = () => {
    const [modal, setModal] = useState(false);

    const dispath = useAppDispatch();
    const authData = useSelector(selectAuthUserData);

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

    const handleLogoutClick = () => {
        if (authData) dispath(userActions.logout());
    };

    const onCloseModal = () => {
        setModal(false);
    };

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
                <div className={styles.footer}>
                    {!authData && (
                        <Button theme={ButtonTheme.OUTLINE} onClick={() => setModal(true)}>
                            Login
                        </Button>
                    )}
                    <LoginModal
                        isOpen={modal}
                        onSuccess={onCloseModal}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppBar;
