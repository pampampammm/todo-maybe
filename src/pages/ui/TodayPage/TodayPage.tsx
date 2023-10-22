import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Page } from 'widgets/Page';
import { TaskList } from 'entities/Tasks';
import { useAppDispatch } from 'app/StoreProvider';
import DynamicStoreReducerWrapper from 'shared/components/StoreReducerWrapper/StoreReducerWrapper';
import { fetchTasks } from 'pages/model/services/fetchTasksByDate';
import { getPageLoading, getPageTaskFormId, getPageView } from 'pages/model/selectors/pageSelectors';
import { TaskEditForm } from 'features/editTaskForm';
import { getTasks, pageActions, pageReducer } from '../../model/slice/pageSlice';
import styles from './TodayPage.module.scss';

const TodayPage = () => {
    const tasks = useSelector(getTasks.selectAll);
    const isLoading = useSelector(getPageLoading);
    const view = useSelector(getPageView);
    const id = useSelector(getPageTaskFormId);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleClickDetails = (id: string) => {
        dispatch(pageActions.setFormView(true));
        dispatch(pageActions.setTaskId(id));
    };

    const handleClose = () => {
        dispatch(pageActions.setFormView(false));
    };

    return (
        <Page className={styles.section}>
            <TaskList
                items={tasks}
                className={styles.taskList}
                isLoading={isLoading}
                onTaskClick={handleClickDetails}
            />
            {view && id !== undefined
                        && (
                            <TaskEditForm
                                className={styles.editForm}
                                id={id}
                                onClose={handleClose}
                            />
                        )}
        </Page>
    );
};

export default TodayPage;
