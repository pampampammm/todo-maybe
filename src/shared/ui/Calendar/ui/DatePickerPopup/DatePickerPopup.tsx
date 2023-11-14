import React, {
    useLayoutEffect, useMemo, useState,
} from 'react';
import Input, { InputTheme } from 'shared/ui/Input/Input';

import { getFormattedDateValue } from 'shared/lib/helpers/getFormattedDate';
import Popup from 'shared/ui/Popup/Popup';
import classNames from 'classnames';
import { getFormattedDateFromInputValue, isValidateString } from 'shared/lib/hooks/useCalendar/lib/helpers';
import CalendarGrid from '../CalendarGrid/CalendarGrid';
import styles from './DatePicker.module.scss';

interface PopupProps {
    onDateChange?: (date: Date) => void,
    value?: Date,
}

const DatePickerPopup = (props: PopupProps) => {
    const {
        onDateChange,
        value = new Date(),
    } = props;

    const [panelInputValue, setPanelInputValue] = useState('');
    const [isOpen, setModalShow] = useState(false);

    useLayoutEffect(() => {
        setPanelInputValue(getFormattedDateValue(value));
    }, []);

    const [inputValueDate, isInvalidInputValue] = useMemo(
        () => {
            const inputValue = getFormattedDateFromInputValue(panelInputValue);
            const isInvalid = isValidateString(panelInputValue);

            return [inputValue, isInvalid];
        },
        [panelInputValue],
    );

    const updateDateFromInputActionClose = () => {
        const newDate = getFormattedDateFromInputValue(panelInputValue);

        if (!newDate) {
            // reset

            setPanelInputValue(getFormattedDateValue(value));
            return;
        }

        onDateChange(newDate);
    };

    const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPanelInputValue(value.trim());
    };

    const handleCalendarDateChange = (date: Date) => {
        if (onDateChange) {
            onDateChange(date);
        }

        setPanelInputValue(getFormattedDateValue(date));
        setModalShow(false);
    };

    const handleClose = () => {
        setModalShow(false);
    };

    const handleFocus = () => {
        if (!isOpen) {
            setModalShow(true);
        }
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key !== 'Enter') {
            return;
        }

        updateDateFromInputActionClose();
        setModalShow(false);
    };

    const handleOutsideClick = () => {
        updateDateFromInputActionClose();
        setModalShow(false);
    };

    const mods: Record<string, boolean> = {
        [styles.invalidInput]: !isInvalidInputValue,
    };

    return (
        <div className={styles.wrapper}>
            <Input
                className={classNames(styles.input, mods)}
                theme={InputTheme.OUTLINE}
                placeholder="MM-DD-YYYY"
                value={panelInputValue}
                onClick={handleFocus}
                onKeyDown={onKeyDown}
                onChange={handleInputValueChange}
            />
            {isOpen && (
                <Popup
                    isOpen={isOpen}
                    onClose={handleClose}
                    className={styles.popup}
                    onOutsideClick={handleOutsideClick}
                >
                    <CalendarGrid
                        selectedValue={value}
                        inputValue={inputValueDate}
                        className={styles.calendar}
                        onChange={handleCalendarDateChange}
                    />
                </Popup>
            )}

        </div>

    );
};

export default DatePickerPopup;
