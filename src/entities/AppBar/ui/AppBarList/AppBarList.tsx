import styles from './AppBarList.module.scss'
import React from "react";

interface ListProps {
    children: React.ReactNode,
    placeHolder: string
}

export const AppBarList = ({children, placeHolder}: ListProps) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.placeholder}>
                {placeHolder}
            </span>
            {children}
        </div>
    )
}