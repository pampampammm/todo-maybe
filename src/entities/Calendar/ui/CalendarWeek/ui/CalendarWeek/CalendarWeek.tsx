import { useMemo } from 'react';

import TimeColumnWrapper from 'entities/Calendar/ui/TimeColumnWrapper/TimeColumnWrapper';
import CalendarColumn from 'entities/Calendar/ui/CalendarColumn/CalendarColumn';
import { TaskEntity } from 'entities/Tasks/model/type/Task';

import styles from './CalendarWeek.module.scss';

const days = ['Mon', 'Tues', 'Wed', 'Thu',
    'Fri', 'Sat', 'Sun'];

interface MonthCalendarProps {
    items: TaskEntity[]
}

const CalendarWeek = (props: MonthCalendarProps) => {
    const { items } = props;

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
