import React, { memo, useMemo } from 'react';

import { TaskEntity } from 'entities/Tasks/model/type/Task';
import { daysOfTheWeek, isToday } from 'shared/lib/hooks/useCalendar/lib/helpers';
import { DateCellItem } from 'shared/lib/hooks/useCalendar/types/types';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getParsedDate } from 'shared/lib/helpers/getFormattedDate';
import WeekColumn from '../CalendarColumn/WeekColumn';

import styles from './CalendarWeek.module.scss';

interface MonthCalendarProps {
    tasks: TaskEntity[],
    isLoading: boolean,
    weekDateCells: DateCellItem[],
    onSwitchWeekNext?: () => void,
    onSwitchWeekPrev?: () => void,
}

const CalendarWeek = memo((props: MonthCalendarProps) => {
    const {
        tasks,
        isLoading,
        weekDateCells,
        onSwitchWeekNext,
        onSwitchWeekPrev,
    } = props;

    const renderColumns = useMemo(() => weekDateCells.map((value) => {
        const cell: DateCellItem = {
            date: value.date,
            month: value.month,
            year: value.year,
        };

        const tasksItems = tasks
            .filter((task) => isToday(cell, getParsedDate(task.time.start)));

        return (
            <WeekColumn
                tasks={tasksItems}
                dateCell={cell}
                className={styles.columnDay}
            />
        );
    }), [weekDateCells, tasks, isLoading]);

    if (isLoading) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.cellsHeader}>
                    {daysOfTheWeek.map((weekDay) => (
                        <div key={weekDay} className={styles.skeletonHeaderCell} />
                    ))}
                </div>
                <div className={styles.gridWrapper}>
                    {new Array(6)
                        .fill(null)
                        .map((item, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div key={index} className={styles.columnDaySkeleton} />
                        ))}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.monthHeader}>
                <Button
                    onClick={onSwitchWeekPrev}
                    className={styles.headerBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    <strong>{'<'}</strong>
                </Button>
                <Button
                    onClick={onSwitchWeekNext}
                    className={styles.headerBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    <strong>{'>'}</strong>
                </Button>
            </div>
            <div className={styles.weekDays}>
                {daysOfTheWeek.map((weekDay) => (
                    <h3 key={weekDay} className={styles.weekCell}>
                        {weekDay}
                    </h3>
                ))}
            </div>
            <div className={styles.gridWrapper}>
                {renderColumns}
            </div>
        </div>

    );
});

export default CalendarWeek;
