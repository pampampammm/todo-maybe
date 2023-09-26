"use client";

import {Button} from "@mui/material";
import styles from "./buttonsGroup.module.css";

export interface IPropsButtons {
    onHandleClick: () => void;
}

export const ButtonGroup = ({onHandleClick}: IPropsButtons) => {

    const onResetFilters = () => {
        console.log("filters reset");
    };

    return (
        <div className={styles.buttonsWrapper}>
            <div className={styles.buttonsContainer}>
                <Button
                    className={styles.buttonLabel}
                    onClick={onResetFilters}
                >
                    Очистить
                </Button>
                <Button
                    className={styles.buttonApply}
                    onClick={() => onHandleClick}
                >
                    Применить фильтры
                </Button>
            </div>
        </div>
    );
};

export const FiltersButtonGroup = ButtonGroup;