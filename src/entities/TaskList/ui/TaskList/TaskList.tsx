import React, { useEffect } from 'react';

import TaskItem from 'entities/TaskList/ui/TaskItem/TaskItem';
import Input, { InputTheme } from 'shared/ui/Input/Input';

import classNames from 'classnames';
import styles from './TaskList.module.scss';

interface ListProps {
    text?: string
    className?: string
    border?: boolean
    children: React.ReactNode | React.ReactElement
    inputTheme?: InputTheme
}

const TaskList = (props: ListProps) => {
    const {
        text,
        className,
        border = false,
        children,
        inputTheme,
    } = props;

    useEffect(() => {

    }, []);

    const mods: Record<string, boolean> = {
        [styles.border]: border,
    };

    return (
        <div className={classNames(styles.wrapper, mods, [className])}>
            {text && (
                <h2 className={styles.listHeader}>
                    {text}
                </h2>
            )}

            <div className={styles.body}>
                <Input
                    placeholder="Add New Task..."
                    className={styles.input}
                    theme={inputTheme && inputTheme}
                />
                <ul className={styles.list}>
                    {children}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
