import styles from './CalendarWeekColumn.module.scss'
import classNames from "classnames";

interface ColumnProps {
    name: string,
    active?: boolean
}

export const CalendarWeekColumn = (props: ColumnProps) => {
    const {name, active=false} = props

    const mods: Record<string, boolean> = {
        [styles.active]: active,
    }

    return (
        <div className={classNames(styles.column, mods)}>
            <div className={styles.columnHeader}>
                <span>{name.toUpperCase()}</span>
            </div>
            <div className={styles.tasks}>
            </div>
        </div>
    )
}