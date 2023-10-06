import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Chip } from '../../types/Chip';

import styles from './Chip.module.scss';

export enum ChipButtonType {
    DELETE='delete',
    ADD='add',
    NOTHING='nothing'
}

interface ChipProps {
    item: Chip,
    onChange?: (items: Chip) => void,
    className?: string,
    haveButton?: boolean
}

const ChipComponent = (props: ChipProps) => {
    const {
        item,
        onChange,
        className,
        haveButton,
    } = props;
    const { color, id, text } = item;

    const handleButtonClick = () => {

    };

    return (
        <div
            className={styles.item}
            style={{ backgroundColor: color }}
        >
            {text}
            {haveButton
                && (
                    <Button
                        className={styles.itemAddBtn}
                        type="button"
                        theme={ButtonTheme.CLEAR}
                        onClick={handleButtonClick}
                    >
                        +
                    </Button>
                )}
        </div>
    );
};

export default ChipComponent;
