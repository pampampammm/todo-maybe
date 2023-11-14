import React, {
    memo, useEffect, useId, useState,
} from 'react';
import { useAppDispatch } from 'app/StoreProvider';
import { useSelector } from 'react-redux';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { StyledProps } from 'shared/types/types';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import { tempLists } from 'shared/temp/temp_tasks';
import { ChipsArray } from 'shared/ui/TagsArray';
import { Dropdown } from 'shared/ui/Dropdown';
import DynamicStoreReducerWrapper from 'shared/components/DynamicStoreReducerWrapper/DynamicStoreReducerWrapper';
import classNames from 'classnames';

import { List } from 'entities/List';
import { Tag } from 'entities/Tags';
import DatePickerPopup from 'shared/ui/Calendar/ui/DatePickerPopup/DatePickerPopup';
import { getFormattedDate, getParsedDate } from 'shared/lib/helpers/getFormattedDate';
import DeleteTaskButton from 'features/deleteTask/ui/DeleteTaskButton/DeleteTaskButton';
import { taskFormActions, taskFormReducer } from '../../model/slice/taskFormSlice';
import { updateTaskData } from '../../model/services/udpateTaskData';
import { getTaskData } from '../../model/selector/getTaskData/getTaskData';
import { getTaskList } from '../../model/selector/getTaskList/getTaskList';
import { getTaskLoading } from '../../model/selector/getTaskLoading/getTaskLoading';
import { getTaskError } from '../../model/selector/getTaskError/getTaskError';
import { getTaskTags } from '../../model/selector/getTaskTags/getTaskTags';
import { getTaskForm } from '../../model/selector/getTaskForm/getTaskForm';
import { fetchTaskData } from '../../model/services/fetchTaskData';
import { getTaskTime } from '../../model/selector/getTaskTime/getTaskStartTime';
import styles from './TaskEditFrom.module.scss';

interface DetailsProps extends StyledProps {
    onClose?: () => void,
    onSubmit?: () => void,
    id?: string
}

const TaskEditForm = memo((props: DetailsProps) => {
    const {
        className,
        onClose,
        onSubmit,
        id,
    } = props;

    const listId = useId();
    const dateId = useId();

    const form = useSelector(getTaskForm);
    const data = useSelector(getTaskData);
    const list = useSelector(getTaskList);
    const tags = useSelector(getTaskTags);
    const isLoading = useSelector(getTaskLoading);
    const isError = useSelector(getTaskError);
    const taskTime = useSelector(getTaskTime);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) dispatch(fetchTaskData({ id }));
    }, [dispatch, id]);

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
        if (onSubmit) {
            onSubmit();
        }
    };
    const handleFormCancel = () => {
        dispatch(taskFormActions.cancelTask());
    };
    const handleClose = () => {
        if (onClose) {
            onClose();
            dispatch(taskFormActions.cancelTask());
        }
    };

    const handleStartDateChange = (date: Date) => {
        const newDate = getFormattedDate(date);
        console.log(newDate);

        dispatch(taskFormActions.updateTask({
            time: {
                start: newDate,
            },
        }));
    };

    const handleEndDateChange = (date: Date) => {
        const newDate = getFormattedDate(date);

        dispatch(taskFormActions.updateTask({
            time: {
                end: newDate,
            },
        }));
    };

    if (isLoading) {
        return (
            <div className={styles.section}>
                <p>Loading</p>
            </div>
        );
    }
    if (isError || !id) {
        return (
            <div className={styles.section}>
                <p>Error</p>
            </div>
        );
    }

    const startTime = taskTime.start || 0
        ? getParsedDate(taskTime.start)
        : new Date(2011, 1, 11);

    const handleTaskDeleted = () => {
        if (onClose) {
            onClose();
        }
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
                <form className={styles.formContent}>
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
                            className={styles.titleInput}
                            theme={InputTheme.OUTLINE}
                            placeholder={data.description ? data.description : 'Description...'}
                            onChange={handleDescriptionChange}
                            value={form.description}
                        />
                    </div>
                    <div className={styles.date}>
                        <DatePickerPopup
                            value={startTime}
                            onDateChange={handleStartDateChange}
                        />
                    </div>
                    <div className={styles.chipsRow}>
                        <label htmlFor={dateId} className={styles.label}>
                            Tags
                            <ChipsArray
                                id={listId}
                                items={tags}
                                onChange={handleTagsChange}
                                editable
                            />
                        </label>

                        <label htmlFor={dateId} className={styles.label}>
                            List
                            <Dropdown
                                items={tempLists}
                                defaultValue={list?.label}
                                onChange={handleListChange}
                            />
                        </label>
                    </div>

                </form>
                <div className={styles.footer}>
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
                        <DeleteTaskButton id={id} onTaskDeleted={handleTaskDeleted} />
                    </div>
                </div>
            </div>
        </DynamicStoreReducerWrapper>

    );
});

export default TaskEditForm;
