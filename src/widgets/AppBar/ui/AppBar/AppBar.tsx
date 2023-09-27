import React, {useMemo, useState} from "react";

import Input from "../../../../shared/Input/Input";
import {ColoredLine} from "shared/ui/ColoredLine/ColoredLine";
import {AppBarItem} from "../AppBarItem/AppBarItem";
import {AppBarList} from "../AppBarList/AppBarList";

import styles from './AppBar.module.scss'

import {ListAppBarItemsList, MainAppBarItemsList} from "widgets/AppBar/model/AppBarItems";

const AppBar = () => {
    const changeHandler = () => {

    };

    const mainBarItems = useMemo(() => {
        return (
            <AppBarList placeHolder={'TASKS'}>
                {MainAppBarItemsList.map((value) =>
                    <AppBarItem
                        item={value}
                        key={value.text}
                        className={styles.item}
                    />
                )}
            </AppBarList>)

    }, [])

    const listBarItems = useMemo(() => {
        return (
            <AppBarList placeHolder={'LISTS'}>
                {ListAppBarItemsList.map((value) =>
                    <AppBarItem
                        item={value}
                        key={value.text}
                        className={styles.item}
                    />
                )}
            </AppBarList>)

    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.contentContainer}>
                <div className={styles.header}>
                    <h2>Menu</h2>
                    <Input
                        placeholder={"Search"}
                        onChange={changeHandler}
                        className={styles.headerInput}
                    />
                </div>
                <div className={styles.categoryList}>
                    {mainBarItems}
                    <ColoredLine/>
                    {listBarItems}
                    <ColoredLine/>
                </div>
                <div className={styles.footer}>
                    Settings
                </div>
            </div>
        </div>
    )
}

export default AppBar