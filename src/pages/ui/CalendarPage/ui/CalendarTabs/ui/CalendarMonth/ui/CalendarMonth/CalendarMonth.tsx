import React, { memo, useMemo } from 'react';

import { TaskEntity } from 'entities/Tasks/model/type/Task';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { daysOfTheWeek, isToday } from 'shared/lib/hooks/useCalendar/lib/helpers';
import { getParsedDate } from 'shared/lib/helpers/getFormattedDate';
import { DateCellItem } from 'shared/lib/hooks/useCalendar';
import CalendarMonthSkeleton from '../CalendarMonthSkeleton/CalendarMonthSkeleton';
import CellDayWithTasks from '../CellDayWithTasks/CellDayWithTasks';

import styles from './CalendarMonth.module.scss';

export interface MonthCalendarProps {
    items: TaskEntity[],
    isLoading?: boolean,
    dateCells: DateCellItem[],
    onSwitchMonthPrevious?: () => void,
    onSwitchMonthNext?: () => void,
    onTaskClick?: (task: TaskEntity) => void
    onCellClick?: (cell: DateCellItem) => void
}

const cellsMaxViewAmount = 42;

const CalendarMonth = memo((props: MonthCalendarProps) => {
    const {
        dateCells,
        items,
        isLoading,
        onSwitchMonthNext,
        onSwitchMonthPrevious,
        onTaskClick,
    } = props;

    const cells = useMemo(() => dateCells.map((cell, index) => {
        if (index >= cellsMaxViewAmount) {
            return null;
        }

        const tasks = items
            .filter((task) => isToday(cell, getParsedDate(task.time.start)));

        return (
            <CellDayWithTasks
                className={styles.cell}
                cell={cell}
                onTaskClick={onTaskClick}
                tasks={tasks}
            />
        );
    }), [dateCells, items]);

    if (isLoading) {
        return (
            <CalendarMonthSkeleton />
        );
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.monthHeader}>
                <Button
                    onClick={onSwitchMonthPrevious}
                    className={styles.headerBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    <strong>{'<'}</strong>
                </Button>
                <Button
                    onClick={onSwitchMonthNext}
                    className={styles.headerBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    <strong>{'>'}</strong>
                </Button>
            </div>
            <div className={styles.cellsHeader}>
                {daysOfTheWeek.map((weekDay) => (
                    <h3 key={weekDay} className={styles.weekCell}>
                        {weekDay}
                    </h3>
                ))}
            </div>
            <div className={styles.cells}>
                {cells}
            </div>
        </div>

    );
});

export default CalendarMonth;
