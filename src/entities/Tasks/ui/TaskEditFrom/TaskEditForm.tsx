import React, { useEffect, useId } from 'react';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { StyledProps } from 'shared/types/types';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import { TaskEntity } from 'entities/Tasks/model/type/Task';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';
import { tempLists, tempTasks } from 'shared/temp/temp_tasks';
import { TaskList, tasksActions, tasksReducer } from 'entities/Tasks';

import classNames from 'classnames';
import { useAppDispatch } from 'app/StoreProvider';
import DynamicStoreReducerWrapper from 'shared/components/StoreReducerWrapper/StoreReducerWrapper';
import { ChipsArray } from 'shared/ui/TagsArray';
import { useSelector } from 'react-redux';
import { List, Tag } from 'shared/ui/TagsArray/types/Tag';
import { selectTaskTags } from 'entities/Tasks/model/selector/selectTaskTags/selectTaskTags';
import { selectTaskList } from 'entities/Tasks/model/selector/selectTaskList/selectTaskList';
import { Dropdown } from 'shared/ui/Dropdown';
import SubtaskItem from 'entities/Tasks/ui/TaskEditFrom/SubtaskItem/SubtaskItem';
import { AddTaskInputField } from 'features/addTaskInputField';
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

    const list = useSelector(selectTaskList);
    const dispatch = useAppDispatch();
    const tags = useSelector(selectTaskTags);

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

    const onTagsChange = (tag: Tag) => {
        dispatch(tasksActions.setTaskTags(tag));
    };

    const handleListChange = (item: List) => {
        dispatch(tasksActions.setTaskList(item));
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
                    <div className={styles.chipsRow}>
                        {/* <label htmlFor={listId}>List</label> */}
                        {/* <Input id={listId} type="text" /> */}
                        <label htmlFor={dateId} className={styles.label}>
                            Tags
                            <ChipsArray
                                id={listId}
                                items={tags}
                                onChange={onTagsChange}
                            />
                        </label>

                        <label htmlFor={dateId} className={styles.label}>
                            List
                            <Dropdown
                                label={list.value}
                                items={tempLists}
                                onChange={handleListChange}
                            />
                        </label>

                    </div>
                    <div className={styles.subtasks}>
                        <h1>Subtask: </h1>
                        <TaskList inputTheme={InputTheme.OUTLINE} className={styles.list}>
                            {item.subtasks && item.subtasks.map((subTask) => (
                                <SubtaskItem item={subTask} />
                            ))}
                        </TaskList>
                    </div>
                    <div className={styles.editButtons}>
                        <Button
                            className={styles.applyBtn}
                            theme={ButtonTheme.BACKGROUND}
                            size={ButtonSize.XL}
                        >
                            Apply Changes
                        </Button>
                        <Button
                            theme={ButtonTheme.BACKGROUND}
                            size={ButtonSize.XL}
                            className={styles.revertButton}
                        >
                            Reset Changes
                        </Button>
                    </div>
                </form>
            </div>
        </DynamicStoreReducerWrapper>

    );
};

export default TaskEditForm;
