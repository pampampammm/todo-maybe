import React, { memo } from 'react';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { TaskEntity } from 'entities/Tasks';
import classNames from 'classnames';
import { DateCellItem } from 'shared/lib/hooks/useCalendar/types/types';
import { isToday } from 'shared/lib/hooks/useCalendar/lib/helpers';
import styles from './CellDayWithTasks.module.scss';

interface CellProps{
    onCellClick?: (item: DateCellItem) => void
    onTaskClick?: (task: TaskEntity) => void
    tasks?: TaskEntity[]
    cell?: DateCellItem
    className?: string
}

const CellDayWithTasks = memo((props: CellProps) => {
    const {
        onCellClick,
        onTaskClick,
        tasks,
        cell,
        className,
    } = props;

    const mods: Record<string, boolean | string> = {
        [styles[cell.view.type]]: cell.view.type,
        [styles.current]: isToday(cell, new Date()),
    };

    const disabled = cell.view.type === 'past' || cell.view.type === 'next';

    return (
        <Button
            disabled={disabled}
            theme={ButtonTheme.CLEAR}
            className={classNames(styles.wrapper, mods, [className])}
            onClick={() => onCellClick(cell)}
        >
            <h3 className={styles.header}>
                {cell.date}
            </h3>
            <div className={styles.body}>
                {tasks && tasks.map((task, index) => {
                    if (index > 2) {
                        return null;
                    }

                    const { list } = task;
                    const listColor = list === undefined ? '' : list.color;

                    const handleTaskClick = () => {
                        onTaskClick(task);
                    };

                    return (
                        <Button
                            className={styles.task}
                            theme={ButtonTheme.CLEAR_INVERTED}
                            style={{ backgroundColor: listColor }}
                            onClick={handleTaskClick}
                        >
                            {task.title}
                        </Button>
                    );
                })}
            </div>
        </Button>
    );
});

export default CellDayWithTasks;
