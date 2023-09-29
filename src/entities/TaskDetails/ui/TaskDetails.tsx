import React, { ChangeEvent, useId } from 'react';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { StyledProps } from 'shared/types/types';

import Input, { InputTheme } from 'shared/ui/Input/Input';
import { TaskSchema } from 'entities/TaskList/type/Task';

import classNames from 'classnames';
import { Dropdown } from 'shared/ui/Dropdown';
import { TaskList } from 'entities/TaskList';
import TaskItem from 'entities/TaskList/ui/TaskItem/TaskItem';
import { tempTasks } from 'shared/temp/temp_tasks';
import styles from './TaskDetails.module.scss';

interface DetailsProps extends StyledProps {
    onClose?: () => void,
    item: TaskSchema
}

const dropdownItem = { title: 'time', list: [{ label: 'shit', value: 'gay', id: 1 }] };

const TaskDetails = (props: DetailsProps) => {
    const {
        className,
        onClose,
        item,
    } = props;

    const listId = useId();
    const dateId = useId();

    const handleClose = () => {
        onClose();
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newValue = e.target.value;

        if (newValue || newValue.length !== 0) { console.log('bruh'); }
    };

    if (item === undefined) {
        return;
    }

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
                />
                <Input
                    type="text"
                    className={styles.descriptionInput}
                    theme={InputTheme.OUTLINE}
                    placeholder={item.description}
                />
                <div className={styles.other}>
                    <label htmlFor={listId}>List</label>
                    <Input id={listId} type="text" />
                    <label htmlFor={dateId}>Date </label>
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

export default TaskDetails;
