import {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";

import {TaskSchema} from "entities/TaskItem";

import styles from './CalendarColumn.module.scss'
import CalendarTask from "entities/Calendar/ui/CalendarTask/CalendarTask";
import classNames from "classnames";

const minuteInAllDay = 1440

function toInteger(number: number) {
    return Math.round(Number(number));
}

interface CalendarProps {
    items?: TaskSchema[],
    name?: string,
    className?: string
    isActive?: boolean
}

const CalendarColumn = (props: CalendarProps) => {
    const {items, name, className, isActive = false} = props

    const [columnHeight, setColumnHeight] = useState(800)
    const [currentTime] = useState(720)
    const [timePercent] = useState(minuteInAllDay / 100)
    const columnRef = useRef(null)

    const mods: Record<string, boolean> = {
        [styles.active]: isActive
    }

    useLayoutEffect(() => {
        setColumnHeight(800)

    }, [columnHeight])


    const getTaskParameter = useCallback((time: number, startTime: number, percent: number) => {
        const taskHeight = toInteger(time / percent)
        const taskPosPercent = toInteger(startTime / percent)
        const taskPosition = (columnHeight / 100) * taskPosPercent

        return {taskHeight, taskPosition}
    }, [columnHeight])

    const renderColumns = useCallback(() => items.map((value, index) => {

        const taskParam = getTaskParameter(
            value.time.endDate - value.time.startDate,
            value.time.startDate,
            timePercent
        )
        const {taskPosition, taskHeight} = taskParam;

        return <CalendarTask
            key={index}
            task={value}
            className={styles.task}
            top={taskPosition}
            height={`${taskHeight}`}
        />
    }), [columnHeight])


    return (
        <div
            className={classNames(styles.taskColumn, mods, [className])}
            ref={columnRef}
        >
            {renderColumns()}
        </div>
    )
}

export default CalendarColumn