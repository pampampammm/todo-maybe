import React, { useMemo, useState } from 'react';

import { ColoredLine } from 'shared/ui/ColoredLine/ColoredLine';
import Input, { InputSize, InputTheme } from 'shared/ui/Input/Input';
import { ListAppBarItemsList, MainAppBarItemsList } from 'widgets/AppBar/model/AppBarItems';
import { Button } from 'shared/ui/Button/Button';
import { LoginForm } from 'features/authByUserName';
import { AppBarItem } from '../AppBarItem/AppBarItem';
import { AppBarList } from '../AppBarList/AppBarList';

import styles from './AppBar.module.scss';

const AppBar = () => {
    const [modal, setModal] = useState(false);

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

    const onModalClose = () => {
        setModal((prevState) => !prevState);
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
                    <Button onClick={() => setModal((prevState) => !prevState)}>modal</Button>
                    {modal && (
                        <LoginForm
                            isOpen={modal}
                            onSuccess={onModalClose}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AppBar;
