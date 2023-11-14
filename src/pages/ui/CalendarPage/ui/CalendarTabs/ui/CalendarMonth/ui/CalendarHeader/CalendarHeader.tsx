import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { useAppDispatch } from 'app/StoreProvider';
import styles from './CalendarHeader.module.scss';

interface HeaderProps {
    onSwitch?: () => void
}

const CalendarHeader = (props: HeaderProps) => {
    const { onSwitch } = props;

    const dispatch = useAppDispatch();
    const handlePageChangeNext = () => {

    };

    const handlePageChangePast = () => {

    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonGroup}>
                <Button theme={ButtonTheme.CLEAR} onClick={handlePageChangeNext}>
                    {'<'}
                </Button>
                <Button theme={ButtonTheme.CLEAR} onClick={handlePageChangePast}>
                    {'>'}
                </Button>
            </div>
        </div>
    );
};

export default CalendarHeader;
