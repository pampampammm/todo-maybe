import React from 'react';

import { TaskEntity } from 'entities/Tasks/model/type/Task';

import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './CalendarTask.module.scss';

interface TaskProps {
    task: TaskEntity,
    className?: string,
    onClick?: (id: string) => void
}

const CalendarTask = (props: TaskProps) => {
    const {

        task,
        className,
        onClick,
    } = props;

    const handleClick = () => {
        if (onClick) {
            onClick(task.id);
        }
    };

    const taskColor = task.list === undefined ? '#cdedff' : task.list?.color;

    const style = {
        backgroundColor: taskColor,
        boxShadow: `0 0 7px 0 ${taskColor}`,
    };

    return (
        <Button
            className={classNames(styles.task, [className])}
            style={style}
            onClick={handleClick}
            theme={ButtonTheme.CLEAR}
        >
            <h3 className={styles.taskContent}>
                {task.title}
            </h3>
        </Button>
    );
};

export default CalendarTask;
