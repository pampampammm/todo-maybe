import React, { ReactElement, memo } from 'react';

import classNames from 'classnames';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header?: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const {
        className,
        content,
        header,
        sidebar,
    } = props;

    return (
        <main className={classNames(styles.MainLayout, {}, [className])}>
            <div className={styles.sidebar}>
                {sidebar}
            </div>
            <div className={styles.content}>
                {content}
            </div>
        </main>
    );
});
