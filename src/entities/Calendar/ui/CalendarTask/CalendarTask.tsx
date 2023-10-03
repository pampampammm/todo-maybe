import React from 'react';

import { TaskSchema } from 'entities/Tasks/model/type/Task';

import classNames from 'classnames';
import { getPercentPlacement } from 'shared/lib/helpers/getPercentPlacement';
import styles from './CalendarTask.module.scss';

interface TaskProps {
    time: number,
    task: TaskSchema,
    className?: string,
    columnHeight: number
}

function toInteger(number: number) {
    return Math.round(Number(number));
}

const minutes = 1440;
const timePercent = toInteger(minutes / 100);

const CalendarTask = (props: TaskProps) => {
    const {
        time,
        task,
        className,
        columnHeight,
    } = props;

    const { position } = getPercentPlacement(columnHeight, time, 1440);

    const taskHeightPercent = toInteger((task.time.endDate - task.time.startDate) / timePercent);
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
