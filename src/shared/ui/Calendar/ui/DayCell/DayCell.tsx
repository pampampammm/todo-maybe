import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classNames from 'classnames';

import { DateCellItem } from 'shared/lib/hooks/useCalendar/types/types';
import { isToday } from 'shared/lib/hooks/useCalendar/lib/helpers';
import styles from './DayCell.module.scss';

interface CellProps {
    isCurrent?: boolean
    cell: DateCellItem
    className?: string
    onClick?: (item: DateCellItem) => void
}

const DayCell = (props: CellProps) => {
    const {
        isCurrent, cell, className, onClick,
    } = props;
    const handleCellClick = () => {
        if (onClick) {
            onClick(cell);
        }
    };

    const mods: Record<string, boolean | string> = {
        [styles[cell.view.type]]: cell.view.type,
        [styles.current]: isToday(cell, new Date()),
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(styles.cell, mods, [className])}
            onClick={handleCellClick}
        >
            <h3 className={styles.cellHeader}>
                {cell.date}
            </h3>
            <div className={styles.body} />
        </Button>
    );
};

export default DayCell;
