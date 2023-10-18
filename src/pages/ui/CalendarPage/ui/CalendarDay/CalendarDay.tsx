import { TaskEntity } from 'entities/Tasks';
import CalendarColumn from '../CalendarColumn/CalendarColumn';
import TimeColumnWrapper from '../TimeColumnWrapper/TimeColumnWrapper';
import styles from './CalendarDay.module.scss';

interface CalendarProps {
    items: TaskEntity[],
    isLoading: boolean
}

const CalendarDay = (props: CalendarProps) => {
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

    return (
        <TimeColumnWrapper className={styles.wrapper}>
            <CalendarColumn
                items={items}
                name={'Wednesday'.toUpperCase()}
                className={styles.column}
            />
        </TimeColumnWrapper>
    );
};

export default CalendarDay;
