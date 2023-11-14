import React from 'react';
import { daysOfTheWeek } from 'shared/lib/hooks/useCalendar/lib/helpers';
import styles from './CalendarMonthSkeleton.module.scss';

const CalendarMonthSkeleton = () => (
    <div className={styles.wrapper}>
        <div className={styles.cellsHeader}>
            {daysOfTheWeek.map((weekDay) => (
                <div key={weekDay} className={styles.skeletonHeaderCell} />
            ))}
        </div>
        <div className={styles.cells}>
            {new Array(42).fill(null).map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className={styles.skeletonCell} />
            ))}
        </div>
    </div>
);

export default CalendarMonthSkeleton;
