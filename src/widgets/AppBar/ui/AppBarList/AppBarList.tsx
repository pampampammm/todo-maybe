import styles from './AppBarList.module.scss'
import React from "react";

interface ListProps {
    children: React.ReactNode,
    placeHolder: string
}

export const AppBarList = ({children, placeHolder}: ListProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.placeholder}>
                {placeHolder}
            </div>
            <ul className={styles.wrapper}>
                {children}
            </ul>
        </div>

    )
}