import React, { useMemo, useState } from 'react';

import classNames from 'classnames';
import { AddTaskField } from 'features/addTaskInputField';
import { TaskEntity } from 'entities/Tasks';
import { Button } from 'shared/ui/Button/Button';
import SkeletonList from './SkeletonList/SkeletonList';
import TaskItem from '../TaskItem/TaskItem';

import styles from './TaskList.module.scss';

interface ListProps {
    text?: string
    className?: string
    border?: boolean
    isLoading?: boolean
    items?: TaskEntity[]
    onTaskClick?: (id: number | string) => void
    overflow?: boolean
}

const TaskList = (props: ListProps) => {
    const {
        text,
        className,
        border = false,
        isLoading,
        items,
        onTaskClick,
        overflow = false,
    } = props;

    const [selectedTask, setSelectedTask] = useState<string>('');

    function handleClickTask(id: string) {
        if (onTaskClick) {
            onTaskClick(id);
        }
        setSelectedTask(id);
    }
    const renderTasks = useMemo(() => items?.map((item) => (
        <li key={item.id}>
            <TaskItem
                item={item}
                className={styles.item}
                active={selectedTask === item.id}
                onClick={handleClickTask}
            />
        </li>

    )), [items, selectedTask]);

    if (isLoading) {
        return <SkeletonList />;
    }

    return (
        <div className={classNames(styles.wrapper, { [styles.border]: border }, [className])}>
            {text && (
                <h2 className={styles.listHeader}>
                    {text}
                </h2>
            )}
            <div className={styles.body}>
                <div className={styles.listHeader}>
                    <AddTaskField className={styles.input} />
                    <Button>Filter</Button>
                </div>
                <ul className={classNames(styles.list, { [styles.listOverflow]: overflow })}>
                    {items.length !== 0
                        ? renderTasks
                        : (<h1>No tasks...</h1>)}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
