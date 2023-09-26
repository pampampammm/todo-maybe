import React from 'react';

import styles from './CalendarTask.module.scss'
import {TaskSchema} from "entities/TaskItem";
import classNames from "classnames";

interface TaskProps {
    top: number | string,
    height: number | string,
    task: TaskSchema,
    className?: string
}

const CalendarTask = (props: TaskProps) => {
    const {height, top, task, className} = props

    return (
        <div
            className={classNames(styles.task, [className])}
            style={{top: top, height: height}}
        >
            {task.title}
        </div>
    );
};

export default CalendarTask;