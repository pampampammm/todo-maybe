import React from 'react';

import { Page } from 'widgets/Page';

import { InputTheme } from 'shared/ui/Input/Input';
import { TaskEntity } from 'entities/Tasks/model/type/Task';
import { tempTasks } from 'shared/temp/temp_tasks';
import { TaskEditForm, TaskList, taskFormActions } from 'entities/Tasks';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';

import { useSelector } from 'react-redux';
import { getTaskForm } from 'entities/Tasks/model/selector/getTaskForm/getTaskForm';
import { useAppDispatch } from 'app/StoreProvider';
import styles from './TodayPage.module.scss';

const TodayPage = () => {
    const detailTask = useSelector(getTaskForm);
    const dispatch = useAppDispatch();
    const handleClose = () => {
        // dispatch(taskFormActions.removeTask());
    };

    const handleClickDetails = (item: TaskEntity) => {
        // dispatch(taskFormActions.setTask(item));
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
                <TaskList className={styles.taskList}>
                    {renderItems()}
                </TaskList>
                {/* {detailTask */}
                {/*    && ( */}
                {/*        <TaskEditForm item={} */}
                {/*            onClose={handleClose} */}
                {/*        /> */}
                {/*    )} */}
            </div>
        </Page>
    );
};

export default TodayPage;
