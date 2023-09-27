import {useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";

import {TaskSchema} from "entities/TaskList/type/Task";
import CalendarTask from "entities/Calendar/ui/CalendarTask/CalendarTask";

import styles from './CalendarColumn.module.scss'
import classNames from "classnames";


interface CalendarProps {
    items?: TaskSchema[],
    name?: string,
    className?: string
    isActive?: boolean
}


const CalendarColumn = (props: CalendarProps) => {
    const {items, name, className, isActive = false} = props

    const [columnHeight, setColumnHeight] = useState(660)
    const columnRef = useRef(null)

    useLayoutEffect(() => {
        if (columnRef.current) {
            setColumnHeight(columnRef.current.clientHeight)
        }
    }, [columnHeight])

    const renderTask = useMemo(() =>
        items.map((value, index) => {
            return <CalendarTask
                key={index}
                task={value}
                className={styles.task}
                time={value.time.startDate}
                columnHeight={columnHeight}
            />
        }), [columnHeight])

    const mods: Record<string, boolean> = {
        [styles.active]: isActive
    }

    return (
        <div
            className={classNames(styles.wrapper, mods, [className])} ref={columnRef}>
            {renderTask}
        </div>
    )
}

export default CalendarColumn