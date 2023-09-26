import {useEffect, useLayoutEffect, useRef, useState} from "react";

import {ColoredLine} from "shared/ui/ColoredLine/ColoredLine";

import styles from './TimeColumnWrapper.module.scss'
import classNames from "classnames";

const tempTime = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
]

const minuteInAllDay = 1440


interface TimeColumnProps {
    className?: string
    line?: boolean,
    children: React.ReactNode
}

function toInteger(number: number) {
    return Math.round(Number(number));
}

export const TimeColumnWrapper = (props: TimeColumnProps) => {
    const {line = false, className, children} = props

    const [columnHeight, setColumnHeight] = useState(0)
    const [linePosition, setLinePosition] = useState(0)
    const [currentTime] = useState(0)

    const columnRef = useRef(null)


    useLayoutEffect(() => {
        setColumnHeight(columnRef.current.clientHeight)

        if (columnRef) {
            const convertedCurrentTimePercent = currentTime / (minuteInAllDay / 100)
            const newPosition = (columnHeight / 100) * convertedCurrentTimePercent

            setLinePosition(toInteger(newPosition))
        }
    }, [columnHeight])


    const columnToRender = () => {
        return tempTime.map((value) =>
            <div key={value} className={styles.timeBlock}>
                <span className={styles.time}>{value}</span>
            </div>
        )
    }

    return (
        <div className={classNames(styles.wrapper, className)}>
            <div ref={columnRef}
                 className={styles.column}
            >
                {columnToRender()}
                {line &&
                    <hr className={styles.line}
                        style={{top: linePosition}}
                    />}
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}