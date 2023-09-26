import React, {useMemo, useState} from "react";

import Input from "../../../../shared/Input/Input";
import {ColoredLine} from "shared/ui/ColoredLine/ColoredLine";
import {AppBarItem} from "../AppBarItem/AppBarItem";
import {AppBarList} from "../AppBarList/AppBarList";
import {ListAppBarItemsList, MainAppBarItemsList} from "entities/AppBar/model/AppBarItems";

import styles from './AppBar.module.scss'

const AppBar = () => {
    const changeHandler = () => {

    };

    const mainBarItems = useMemo(() => {
        return (
            <AppBarList placeHolder={'Tasks'}>
                {MainAppBarItemsList.map((value) =>
                    <AppBarItem item={value} key={value.text}/>
                )}
            </AppBarList>)

    }, [])

    const listBarItems = useMemo(() => {
        return (
            <AppBarList placeHolder={'List'}>
                {ListAppBarItemsList.map((value) =>
                    <AppBarItem item={value} key={value.text}/>
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