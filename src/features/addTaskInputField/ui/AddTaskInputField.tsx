import React, { useCallback, useState } from 'react';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import DynamicStoreReducerWrapper from 'shared/components/StoreReducerWrapper/StoreReducerWrapper';
import { addTaskActions, addTaskReducer } from 'features/addTaskInputField';
import { useAppDispatch } from 'app/StoreProvider';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { getAddTaskField } from 'features/addTaskInputField/model/selector/getAddTaskField/getAddTaskField';

import styles from './AddTaskInputField.module.scss';

interface FiledProps {
    buttonTheme?: ButtonTheme,
    inputTheme?: InputTheme,
    className?: string,
    onTaskAdd: (value: string) => void,
    placeHolder?: string
}

const AddTaskInputField = (props: FiledProps) => {
    const {
        buttonTheme = ButtonTheme.OUTLINE_INVERTED,
        inputTheme = InputTheme.OUTLINE_INVERTED,
        className,
        onTaskAdd,
        placeHolder,
    } = props;

    const dispatch = useAppDispatch();
    const text = useSelector(getAddTaskField);

    const onTextChange = useCallback((value: string) => {
        dispatch(addTaskActions.setText(value));
    }, [dispatch]);

    const onAddHandler = useCallback(() => {
        if (onTaskAdd) {
            onTaskAdd(text || '');
            onTextChange('');
        }
    }, [onTextChange, onTaskAdd, text]);

    return (
        <DynamicStoreReducerWrapper reducerKey="addTask" reducer={addTaskReducer}>
            <div className={classNames(styles.wrapper, [className])}>
                <Button
                    theme={buttonTheme}
                    onClick={onAddHandler}
                    className={styles.button}
                >
                    +
                </Button>
                <Input
                    value={text || ''}
                    placeholder={placeHolder}
                    theme={inputTheme}
                    onChange={(e) => onTextChange(e.target.value)}
                    className={styles.input}
                />
            </div>
        </DynamicStoreReducerWrapper>

    );
};

export default AddTaskInputField;
