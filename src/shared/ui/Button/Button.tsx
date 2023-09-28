import React, {ButtonHTMLAttributes, forwardRef, memo} from 'react';

import {StyledProps} from "shared/types/types";

import classNames from "classnames";
import styles from './Button.module.scss'
import {Dropdown} from "shared/ui/Dropdown";

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    onClick?: () => void,
    children?: React.ReactNode | boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
    size?: ButtonSize;
    theme?: ButtonTheme;
}

export const Button = forwardRef((props: ButtonProps, ref) => {
    const {
        className,
        children,
        disabled,
        size = ButtonSize.M,
        theme = ButtonTheme.OUTLINE,
        ...otherProps
    } = props;

    const mods: Record<string, boolean | string | undefined> = {
        [styles[theme]]: true,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(styles.button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});

