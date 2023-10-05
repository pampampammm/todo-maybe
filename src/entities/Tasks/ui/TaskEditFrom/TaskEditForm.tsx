import React, { ChangeEvent, useEffect, useId } from 'react';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { StyledProps } from 'shared/types/types';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import { TaskEntity } from 'entities/Tasks/model/type/Task';
import { Dropdown } from 'shared/ui/Dropdown';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';
import { tempTasks } from 'shared/temp/temp_tasks';
import { TaskList, tasksActions } from 'entities/Tasks';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectTask } from 'entities/Tasks/model/selector/selectTask/selectTask';
import { useAppDispatch } from 'app/StoreProvider';
import styles from './TaskEditFrom.module.scss';

interface DetailsProps extends StyledProps {
    onClose?: () => void,
    item: TaskEntity
}

const dropdownItem = { title: 'time', list: [{ label: 'shit', value: 'gay', id: 1 }] };

const TaskEditForm = (props: DetailsProps) => {
    const {
        className,
        onClose,
        item,
    } = props;

    const listId = useId();
    const dateId = useId();

    const dispatch = useAppDispatch();

    useEffect(() => () => {
        // dispatch(tasksActions.)
    }, []);

    const handleClose = () => {
        onClose();
    };

    const handleTitleChange = () => {
        dispatch(tasksActions.editTaskTitle());
    };

    const handleDescriptionChange = () => {
        dispatch(tasksActions.editTaskDescription());
    };

    // eslint-disable-next-line consistent-return
    return (
        <div className={classNames(styles.section, [className])}>
            <h1 className={styles.header}>
                <span>Task:</span>
                <Button
                    theme={ButtonTheme.CLEAR}
                    size={ButtonSize.M}
                    onClick={handleClose}
                >
                    X
                </Button>
            </h1>
            <form>
                <Input
                    type="text"
                    className={styles.titleInput}
                    theme={InputTheme.OUTLINE}
                    placeholder={item.title}
                    onChange={handleTitleChange}
                />
                <Input
                    type="text"
                    className={styles.descriptionInput}
                    theme={InputTheme.OUTLINE}
                    placeholder={item.description}
                    onChange={handleDescriptionChange}
                />
                <div className={styles.other}>
                    <label htmlFor={listId}>Tags</label>
                    <Input id={listId} type="text" />
                    <label htmlFor={dateId}>List </label>
                    <Dropdown items={dropdownItem} />
                    {/* <label>Tags</label> */}
                </div>
                <label className={styles.subtasks}>
                    <h1>Subtask: </h1>
                    <TaskList inputTheme={InputTheme.CLEAR} className={styles.list}>
                        <TaskItem item={tempTasks[2]} optionsButton={false} />
                        <TaskItem item={tempTasks[1]} optionsButton={false} />
                    </TaskList>
                </label>
            </form>
        </div>
    );
};

export default TaskEditForm;
