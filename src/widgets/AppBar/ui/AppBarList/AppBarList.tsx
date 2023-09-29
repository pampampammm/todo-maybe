import React from 'react';
import styles from './AppBarList.module.scss';

interface ListProps {
    children: React.ReactNode,
    placeHolder: string
}

export const AppBarList = ({ children, placeHolder }: ListProps) => (
    <div className={styles.wrapper}>
        <div className={styles.placeholder}>
            {placeHolder}
        </div>
        <ul className={styles.wrapper}>
            {children}
        </ul>
    </div>

);
