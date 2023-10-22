import {
    useLayoutEffect, useMemo, useRef, useState,
} from 'react';

import { TaskEntity } from 'entities/Tasks/model/type/Task';

import classNames from 'classnames';
import styles from './CalendarColumn.module.scss';
import CalendarTask from '../CalendarTask/CalendarTask';

interface CalendarProps {
    items?: TaskEntity[],
    name?: string,
    className?: string
    isActive?: boolean
}

const CalendarColumn = (props: CalendarProps) => {
    const {
        items, name, className, isActive = false,
    } = props;

    const [columnHeight, setColumnHeight] = useState(660);
    const columnRef = useRef(null);

    useLayoutEffect(() => {
        if (columnRef.current) {
            setColumnHeight(columnRef.current.clientHeight);
        }
    }, [columnHeight]);

    const renderTask = useMemo(() => items.map((task) => {
        const { time } = task;
        const { getMinutes, getHours } = new Date(time.startDate);
        const convertedTime = getMinutes() * getHours();

        console.log(convertedTime);

        return (
            <CalendarTask
                key={time.startDate}
                startTime={convertedTime}
                endTime={400}
                task={task}
                className={styles.task}
                columnHeight={columnHeight}
            />
        );
    }), [columnHeight]);

    const mods: Record<string, boolean> = {
        [styles.active]: isActive,
    };

    return (
        <div
            className={classNames(styles.wrapper, mods, [className])}
            ref={columnRef}
        >
            {renderTask}
        </div>
    );
};

export default CalendarColumn;
