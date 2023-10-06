import React, {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';

import { ButtonSize } from 'shared/ui/Button/Button';

import classNames from 'classnames';
import styles from './Input.module.scss';

export enum InputTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
}

export enum InputSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    name?: string,
    type?: string,
    inputSize?: InputSize,
    theme?: InputTheme,
}

const InputField = (props: InputProps) => {
    const {
        className,
        id,
        type,
        name,
        placeholder,
        autoFocus,
        theme = InputTheme.BACKGROUND,
        inputSize = InputSize.L,
        disabled = false,
        ...rest
    } = props;

    const ref = useRef(null);

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const mods: Record<string, | string | boolean> = {
        [styles[theme]]: true,
        [styles[inputSize]]: true,
        [styles.disabled]: disabled,
    };

    return (
        <input
            className={classNames(styles.input, mods, className)}
            name={name}
            id={id}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...rest}
        />
    );
};

const Input = memo(InputField);
export default Input;
