import { TaskSchema } from 'entities/TaskList/type/Task';

interface MonthCalendarProps {
    items: TaskSchema[]
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
