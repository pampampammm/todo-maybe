import {TimeColumnWrapper} from "entities/Calendar/ui/TimeColumnWrapper/TimeColumnWrapper";
import {TaskSchema} from "entities/TaskItem";

import styles from "./CalendarWeek.module.scss";
import CalendarColumn from "entities/Calendar/ui/CalendarColumn/CalendarColumn";
import {CalendarWeekColumn} from "entities/Calendar/ui/CalendarWeek/ui/CalendarWeekColumn/CalendarWeekColumn";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday", "Sunday"]
const simpleDays = ["Mon", "Tues", "Wed", "Thu",
    "Fri", "Sat", "Sun"]

interface MonthCalendarProps {
    items: TaskSchema[]
}

const CalendarWeek = (props: MonthCalendarProps) => {
    const {items} = props

    return (
            <TimeColumnWrapper className={styles.wrapper} line>
                <div className={styles.columnGrid}>
                    {simpleDays.map((value) =>
                        <CalendarColumn
                            items={items}
                            name={value}
                            key={value}
                            className={styles.columnDay}
                        />
                    )}
                </div>
            </TimeColumnWrapper>
    )
}

export default CalendarWeek

