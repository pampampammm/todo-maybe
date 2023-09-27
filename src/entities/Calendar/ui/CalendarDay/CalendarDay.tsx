import CalendarColumn from "entities/Calendar/ui/CalendarColumn/CalendarColumn";
import {TaskSchema} from "entities/TaskList/type/Task";
import TimeColumnWrapper from "entities/Calendar/ui/TimeColumnWrapper/TimeColumnWrapper";

import styles from './CalendarDay.module.scss'

interface CalendarProps {
    items: TaskSchema[]
}

const CalendarDay = (props: CalendarProps) => {
    const {items} = props

    return (
        <TimeColumnWrapper className={styles.wrapper} line={true}>
            <CalendarColumn
                items={items}
                name={"Wednesday".toUpperCase()}
                className={styles.column}
            />
        </TimeColumnWrapper>
    )
}

export default CalendarDay