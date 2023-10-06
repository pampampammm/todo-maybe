import React, { memo, useMemo, useState } from 'react';

import { Page, PageHeader } from 'widgets/Page';
import { shiftTasks, tempTasks } from 'shared/temp/temp_tasks';
import { TaskEntity } from 'entities/Tasks/model/type/Task';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';
import { TaskEditForm, TaskList, tasksActions } from 'entities/Tasks';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectTask } from 'entities/Tasks/model/selector/selectTask/selectTask';
import { useAppDispatch } from 'app/StoreProvider';
import styles from './MainPage.module.scss';

const MainPage = memo(() => {
    const detailTask = useSelector(selectTask);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(tasksActions.removeTask());
    };

    const handleClickDetails = (item: TaskEntity) => {
        dispatch(tasksActions.setTask(item));
    };

    const renderItems = useMemo(() => tempTasks?.map((item) => (
        <TaskItem
            item={item}
            key={item.title}
            className={styles.item}
            onClick={handleClickDetails}
        />
    )), []);

    const renderTempItems = useMemo(() => shiftTasks.map((item) => (
        <TaskItem
            item={item}
            key={item.title}
            className={styles.item}
            onClick={handleClickDetails}
        />
    )), []);

    return (
        <Page className={styles.section} headerText="Main">
            <div className={classNames(styles.content, { [styles.details]: detailTask })}>
                <div className={styles.lists}>
                    <TaskList
                        border
                        text="Today"
                        className={styles.bigList}
                    >
                        {renderItems}
                    </TaskList>
                    <TaskList
                        border
                        text="Tomorrow"
                    >
                        {renderTempItems}
                    </TaskList>
                    <TaskList
                        border
                        text="This week"
                    >
                        {renderTempItems}
                    </TaskList>
                </div>
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
});

export default MainPage;
