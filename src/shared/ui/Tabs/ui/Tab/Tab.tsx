import styles from './Tab.module.scss'
import React from "react";

export interface TabProps {
    value?: string
    className?: string,
    children: React.ReactElement,
    label?: string
}

const Tab = (props : TabProps) => {
    const {className, value, children} = props

    return (
        <div className={styles.tabWrapper}>
            {children}
        </div>
    )
}

export default Tab

