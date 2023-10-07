import React, { useMemo, useState } from 'react';

import { Page, PageHeader } from 'widgets/Page';

import { InputTheme } from 'shared/ui/Input/Input';
import { TaskEntity } from 'entities/Tasks/model/type/Task';
import { tempTasks } from 'shared/temp/temp_tasks';
import { TaskEditForm, TaskList, tasksActions } from 'entities/Tasks';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';

import { useSelector } from 'react-redux';
import { selectTask } from 'entities/Tasks/model/selector/selectTask/selectTask';
import { useAppDispatch } from 'app/StoreProvider';
import styles from './TodayPage.module.scss';

const TodayPage = () => {
    const detailTask = useSelector(selectTask);
    const dispatch = useAppDispatch();
    const handleClose = () => {
        dispatch(tasksActions.removeTask());
    };

    const handleClickDetails = (item: TaskEntity) => {
        dispatch(tasksActions.setTask(item));
    };

    const renderItems = () => tempTasks.map((item) => (
        <TaskItem
            item={item}
            key={item.title}
            className={styles.item}
            onClick={handleClickDetails}
            optionsButton
        />
    ));

    return (
        <Page className={styles.section} headerText="Today">
            <div className={styles.content}>
                <TaskList className={styles.taskList} inputTheme={InputTheme.OUTLINE}>
                    {renderItems()}
                </TaskList>
                {detailTask
                    && (
                        <TaskEditForm
                            item={detailTask}
                            onClose={handleClose}
                        />
                    )}
            </div>
        </Page>
    );
};

export default TodayPage;
