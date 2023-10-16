import React, {
    memo, useCallback, useEffect, useId,
} from 'react';
import { useAppDispatch } from 'app/StoreProvider';
import { useSelector } from 'react-redux';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { StyledProps } from 'shared/types/types';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import { tempLists } from 'shared/temp/temp_tasks';
import { TaskList, taskFormReducer, taskFormActions } from 'entities/Tasks';
import DynamicStoreReducerWrapper from 'shared/components/StoreReducerWrapper/StoreReducerWrapper';
import { ChipsArray } from 'shared/ui/TagsArray';

import { List, Tag } from 'shared/ui/TagsArray/types/Tag';
import { Dropdown } from 'shared/ui/Dropdown';
import classNames from 'classnames';

import { getTaskForm } from 'entities/Tasks/model/selector/getTaskForm/getTaskForm';
import { updateTaskData } from 'entities/Tasks/model/services/udpateTaskData';
import { getTaskData } from '../../model/selector/getTaskData/getTaskData';
import { getTaskLoading } from '../../model/selector/getTaskLoading/getTaskLoading';
import { getTaskDescription } from '../../model/selector/getTaskDescription/getTaskDescription';
import { getTaskError } from '../../model/selector/getTaskError/getTaskError';
import { fetchTaskData } from '../../model/services/fetchTaskData';
import { getTaskList } from '../../model/selector/getTaskList/getTaskList';
import { getTaskTags } from '../../model/selector/getTaskTags/getTaskTags';

import styles from './TaskEditFrom.module.scss';

interface DetailsProps extends StyledProps {
    onClose?: () => void,
    id?: number
}

const TaskEditForm = memo((props: DetailsProps) => {
    const {
        className,
        onClose,
        id,
    } = props;

    const listId = useId();
    const dateId = useId();

    const form = useSelector(getTaskForm);
    const data = useSelector(getTaskData);
    const description = useSelector(getTaskDescription);
    const list = useSelector(getTaskList);
    const tags = useSelector(getTaskTags);
    const isLoading = useSelector(getTaskLoading);
    const isError = useSelector(getTaskError);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTaskData({ id }));
    }, [dispatch, id]);

    if (isLoading) {
        return (
            <div className={styles.section}>
                <p>Loading</p>
            </div>
        );
    }
    if (isError) {
        return (
            <div className={styles.section}>
                <p>Error</p>
            </div>
        );
    }
    const handleClose = () => {
        if (onClose) onClose();
    };
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        dispatch(taskFormActions.updateTask({ title: newTitle }));
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDescription = e.target.value;
        dispatch(taskFormActions.updateTask({ description: newDescription }));
    };

    const handleTagsChange = (tag: Tag) => {
        dispatch(taskFormActions.updateTask({ tags: [...tags, tag] }));
    };

    const handleListChange = (list: List) => {
        dispatch(taskFormActions.updateTask({ list }));
    };

    const handleFormSubmit = () => {
        dispatch(updateTaskData());
    };

    const handleFormCancel = () => {
        dispatch(taskFormActions.cancelTask());
    };

    return (
        <DynamicStoreReducerWrapper reducerKey="taskForm" reducer={taskFormReducer}>
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
                {data && (
                    <form>
                        <div className={styles.input}>
                            <Input
                                type="text"
                                className={styles.titleInput}
                                theme={InputTheme.OUTLINE}
                                placeholder={data.title}
                                onChange={handleTitleChange}
                                value={form.title}
                            />
                            <Input
                                type="text"
                                className={styles.descriptionInput}
                                theme={InputTheme.OUTLINE}
                                placeholder={data.description}
                                onChange={handleDescriptionChange}
                                value={description}
                            />
                        </div>
                        <div className={styles.chipsRow}>
                            <label htmlFor={dateId} className={styles.label}>
                                Tags
                                <ChipsArray
                                    id={listId}
                                    items={tags}
                                    onChange={handleTagsChange}
                                />
                            </label>

                            <label htmlFor={dateId} className={styles.label}>
                                List
                                {list && (
                                    <Dropdown
                                        label={list.value}
                                        items={tempLists}
                                        onChange={handleListChange}
                                    />
                                )}

                            </label>

                        </div>
                        <div className={styles.subtasks}>
                            <h1>Subtask: </h1>
                            <TaskList className={styles.list}>
                                {/* {item.subtasks && item.subtasks.map((subTask) => ( */}
                                {/*    <SubtaskItem */}
                                {/*        key={subTask.id} */}
                                {/*        item={subTask} */}
                                {/*    /> */}
                                {/* ))} */}
                            </TaskList>
                        </div>
                        <div className={styles.editButtons}>
                            <Button
                                className={styles.applyBtn}
                                theme={ButtonTheme.BACKGROUND}
                                size={ButtonSize.XL}
                                onClick={handleFormSubmit}
                            >
                                Apply Changes
                            </Button>
                            <Button
                                theme={ButtonTheme.BACKGROUND}
                                size={ButtonSize.XL}
                                className={styles.revertButton}
                                onClick={handleFormCancel}
                            >
                                Reset Changes
                            </Button>
                        </div>
                    </form>
                )}

            </div>
        </DynamicStoreReducerWrapper>

    );
});

export default TaskEditForm;
