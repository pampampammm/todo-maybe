import React, { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classNames from 'classnames';
import { DateCellItem } from 'shared/lib/hooks/useCalendar/types/types';

import { daysOfTheWeek } from 'shared/lib/hooks/useCalendar/lib/helpers';
import { useCalendar } from 'shared/lib/hooks/useCalendar';
import { shortMonths } from 'shared/lib/helpers/getFormattedDate';
import DayCell from '../DayCell/DayCell';

import styles from './CalendarGrid.module.scss';

interface PickerProps {
    className?: string
    selectedValue?: Date,
    inputValue?: Date,
    onChange?: (date: Date) => void
}

const CalendarGrid = memo((props: PickerProps) => {
    const {
        className,
        selectedValue,
        inputValue,
        onChange,
    } = props;

    const {
        monthDateCells,
        month,
        year,
        controls,
    } = useCalendar({
        selectedValue,
        inputValue,
    });

    const { switchMonthNext, switchMonthPrevious, switchYear } = controls;
    const onDateSelect = (item: DateCellItem) => {
        if (onChange) {
            onChange(new Date(item.year, item.month, item.date));
        }
    };

    return (
        <div className={classNames(styles.wrapper, [className])}>
            <h5 className={styles.header}>
                <Button theme={ButtonTheme.CLEAR} onClick={() => switchYear(-1)}>
                    {'<<'}
                </Button>
                <Button theme={ButtonTheme.CLEAR} onClick={() => switchMonthPrevious()}>
                    {'<'}
                </Button>
                <h3>
                    {`${year} ${shortMonths[month]}`}
                </h3>
                <Button theme={ButtonTheme.CLEAR} onClick={() => switchMonthNext()}>
                    {'>'}
                </Button>
                <Button theme={ButtonTheme.CLEAR} onClick={() => switchYear(1)}>
                    {'>>'}
                </Button>
            </h5>
            <div className={styles.cellsHeader}>
                {daysOfTheWeek.map((weekDay) => (
                    <h3 key={weekDay} className={styles.weekCell}>
                        {weekDay}
                    </h3>
                ))}
            </div>
            <div className={styles.cells}>
                {monthDateCells.map((cell) => (
                    <DayCell
                        cell={cell}
                        onClick={onDateSelect}
                        className={styles.cell}
                        key={`${cell.date}-${cell.month}-${cell.year}`}
                    />
                ))}
            </div>
        </div>
    );
});

export default CalendarGrid;
