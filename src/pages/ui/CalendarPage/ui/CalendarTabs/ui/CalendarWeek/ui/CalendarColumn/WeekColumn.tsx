import { TaskEntity } from 'entities/Tasks/model/type/Task';

import classNames from 'classnames';
import { getParsedDate } from 'shared/lib/helpers/getFormattedDate';
import { DateCellItem } from 'shared/lib/hooks/useCalendar/types/types';
import styles from './CalendarColumn.module.scss';
import CalendarTask from '../../../CalendarTask/CalendarTask';

interface CalendarProps {
    tasks?: TaskEntity[],
    dateCell: DateCellItem
    className?: string
    isActive?: boolean
}

const WeekColumn = (props: CalendarProps) => {
    const {
        tasks,
        dateCell,
        className,
        isActive,
    } = props;

    const renderTask = () => tasks?.map((task) => {
        const { time } = task;
        const convertedTime = getParsedDate(time.start);
        const startTime = convertedTime.getHours() * convertedTime.getMinutes();

        return (
            <CalendarTask
                key={startTime}
                task={task}
                className={styles.task}
            />
        );
    });

    const mods: Record<string, boolean> = {
        [styles.active]: isActive,
    };

    return (
        <div className={classNames(styles.wrapper, mods, [className])}>
            {dateCell.date}
            {renderTask()}
        </div>
    );
};

export default WeekColumn;
