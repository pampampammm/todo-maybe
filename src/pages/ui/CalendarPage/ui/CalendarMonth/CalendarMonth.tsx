import { TaskEntity } from 'entities/Tasks/model/type/Task';

interface MonthCalendarProps {
    items: TaskEntity[],
    isLoading: boolean
}

const CalendarMonth = (props: MonthCalendarProps) => {
    const {
        items,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div>
                Loading
            </div>
        );
    }

    return (
        <div>
            Month
        </div>
    );
};

export default CalendarMonth;
