import React, { useEffect } from 'react';

import Input, { InputTheme } from 'shared/ui/Input/Input';

import classNames from 'classnames';
import { AddTaskField } from 'features/addTaskInputField';
import styles from './TaskList.module.scss';

interface ListProps {
    text?: string
    className?: string
    border?: boolean
    children: React.ReactNode | React.ReactElement
    isLoading?: boolean
}

const TaskList = (props: ListProps) => {
    const {
        text,
        className,
        border = false,
        children,
        isLoading,
    } = props;

    const mods: Record<string, boolean> = {
        [styles.border]: border,
    };

    const handleTaskCreate = () => {

    };

    if (isLoading) {
        return (
            <div className={classNames(styles.wrapper, mods, [className])}>
                {text && (
                    <h2 className={styles.listHeader}>
                        {text}
                    </h2>
                )}
                <div className={styles.body}>
                    <AddTaskField
                        onTaskAdd={handleTaskCreate}
                        className={styles.input}
                    />
                    <ul className={styles.list}>
                        {children}
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(styles.wrapper, mods, [className])}>
            {text && (
                <h2 className={styles.listHeader}>
                    {text}
                </h2>
            )}

            <div className={styles.body}>
                <AddTaskField
                    onTaskAdd={handleTaskCreate}
                    className={styles.input}
                />
                <ul className={styles.list}>
                    {children}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
