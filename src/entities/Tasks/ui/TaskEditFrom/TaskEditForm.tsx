import React, {
    ChangeEvent, useEffect, useId, useState,
} from 'react';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { StyledProps } from 'shared/types/types';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import { TaskEntity } from 'entities/Tasks/model/type/Task';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';
import { tempTasks } from 'shared/temp/temp_tasks';
import { TaskList, tasksActions, tasksReducer } from 'entities/Tasks';

import classNames from 'classnames';
import { useAppDispatch } from 'app/StoreProvider';
import DynamicStoreReducerWrapper from 'shared/components/StoreReducerWrapper/StoreReducerWrapper';
import { Chip, ChipsArray } from 'shared/ui/TagsArray';
import { useSelector } from 'react-redux';
import { selectTask } from 'entities/Tasks/model/selector/selectTask/selectTask';
import styles from './TaskEditFrom.module.scss';

interface DetailsProps extends StyledProps {
    onClose?: () => void,
    item: TaskEntity
}

const TaskEditForm = (props: DetailsProps) => {
    const {
        className,
        onClose,
        item,
    } = props;

    const listId = useId();
    const dateId = useId();

    const dispatch = useAppDispatch();
    const { tags } = useSelector(selectTask);

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

    const onTagsChange = (tag: Chip) => {
        // setTags([...tags, tag]);
        dispatch(tasksActions.addTaskTags(tag.text));
    };

    // eslint-disable-next-line consistent-return
    return (
        <DynamicStoreReducerWrapper reducerKey="task" reducer={tasksReducer}>
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
                    <div className={styles.input}>
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
                    </div>
                    <div className={styles.other}>
                        {/* <label htmlFor={listId}>List</label> */}
                        {/* <Input id={listId} type="text" /> */}
                        <label htmlFor={dateId}>Tags </label>
                        <ChipsArray
                            tags={tags}
                            className={styles.tags}
                            onChange={onTagsChange}
                        />
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
        </DynamicStoreReducerWrapper>

    );
};

export default TaskEditForm;
