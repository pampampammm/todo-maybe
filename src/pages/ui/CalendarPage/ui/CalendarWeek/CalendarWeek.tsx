import { useMemo } from 'react';

import { TaskEntity } from 'entities/Tasks/model/type/Task';

import styles from './CalendarWeek.module.scss';
import TimeColumnWrapper from '../TimeColumnWrapper/TimeColumnWrapper';
import CalendarColumn from '../CalendarColumn/CalendarColumn';

const days = ['Mon', 'Tues', 'Wed', 'Thu',
    'Fri', 'Sat', 'Sun'];

interface MonthCalendarProps {
    items: TaskEntity[],
    isLoading: boolean
}

const CalendarWeek = (props: MonthCalendarProps) => {
    const {
        items,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <TimeColumnWrapper className={styles.wrapper}>
                Loading
            </TimeColumnWrapper>
        );
    }

    const renderColumns = useMemo(() => days.map((value) => (
        <CalendarColumn
            items={items}
            name={value}
            key={value}
            className={styles.columnDay}
        />
    )), []);

    return (
        <TimeColumnWrapper className={styles.wrapper}>
            <div className={styles.gridWrapper}>
                {renderColumns}
            </div>
        </TimeColumnWrapper>
    );
};

export default CalendarWeek;
