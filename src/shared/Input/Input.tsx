import React, {ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef} from "react";

import style from "./InputFiled.module.scss"
import cn from "classnames";


export enum InputSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    onChange: (value: string) => void,
    className?: string,
    id?: string,
    name?: string,
    type?: string,
}

const InputField = (props : InputProps) => {
    const {
        className,
        id,
        type,
        name,
        placeholder,
        autoFocus,
        onChange,
        ...rest
    } = props

    const ref = useRef(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const newValue = e.target.value

        if (newValue || newValue.length !== 0)
            onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);


    return (
        <div className={style.wrapper}>
            <input
                className={cn(style.input, className)}
                name={name}
                id={props.id}
                type={props.type}
                placeholder={placeholder}
                onChange={onChangeHandler}
                {...rest}
            />
        </div>
    )
}

const Input = memo(InputField);
export default Input;