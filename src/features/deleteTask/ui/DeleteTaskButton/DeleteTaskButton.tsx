import React from 'react';

import { Button } from 'shared/ui/Button/Button';
import classNames from 'classnames';
import { useAppDispatch } from 'app/StoreProvider';
import { deleteTask } from 'features/deleteTask/model/services/deleteTask';

import styles from './DeleteButtonProps.module.scss';

interface ButtonProps {
    onTaskDeleted: () => void,
    className?: string
    id: string
}

const DeleteTaskButton = (props: ButtonProps) => {
    const { className, id, onTaskDeleted } = props;

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(deleteTask({ id }));

        if (onTaskDeleted) {
            onTaskDeleted();
        }
    };

    return (
        <Button className={classNames(styles.button, [className])} onClick={handleClick}>
            Delete
        </Button>
    );
};

export default DeleteTaskButton;
