import React from 'react';

import { TaskEntity } from 'entities/Tasks/model/type/Task';

import classNames from 'classnames';
import { getPercentPlacement } from 'shared/lib/helpers/getPercentPlacement';
import styles from './CalendarTask.module.scss';

interface TaskProps {
    startTime: number,
    endTime: number,
    task: TaskEntity,
    columnHeight: number
    className?: string,
}

function toInteger(number: number) {
    return Math.round(Number(number));
}

const minutes = 1440;
const timePercent = toInteger(minutes / 100);

const CalendarTask = (props: TaskProps) => {
    const {
        startTime,
        endTime,
        task,
        className,
        columnHeight,
    } = props;

    const { position } = getPercentPlacement(columnHeight, startTime, 1440);

    const taskHeightPercent = toInteger((endTime - startTime) / timePercent);
    const taskHeight = (columnHeight / 100) * taskHeightPercent;

    return (
        <div
            className={classNames(styles.task, [className])}
            style={{ top: position, height: taskHeight }}
        >
            {task.title}
        </div>
    );
};

export default CalendarTask;
