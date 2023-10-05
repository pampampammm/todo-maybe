import { TaskEntity } from 'entities/Tasks/model/type/Task';

interface MonthCalendarProps {
    items: TaskEntity[]
}

const CalendarMonth = (props: MonthCalendarProps) => {
    const { items } = props;

    return (
        <div>
            Month
        </div>
    );
};

export default CalendarMonth;
