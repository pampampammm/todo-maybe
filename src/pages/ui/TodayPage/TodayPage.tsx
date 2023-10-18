import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Page } from 'widgets/Page';
import { TaskList } from 'entities/Tasks';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';
import { useAppDispatch } from 'app/StoreProvider';
import DynamicStoreReducerWrapper from 'shared/components/StoreReducerWrapper/StoreReducerWrapper';
import { fetchTaskByDate } from 'pages/model/services/fetchTasksByDate';
import { getPageLoading, getPageTaskFormId, getPageView } from 'pages/model/selectors/pageSelectors';
import { getTasks, pageActions, pageReducer } from '../../model/slice/pageSlice';
import TaskEditForm from '../../../features/editTaskForm/ui/TaskEditForm';
import styles from './TodayPage.module.scss';

const TodayPage = () => {
    const tasks = useSelector(getTasks.selectAll);
    const isLoading = useSelector(getPageLoading);
    const view = useSelector(getPageView);
    const id = useSelector(getPageTaskFormId);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTaskByDate());
    }, [dispatch]);

    const handleClickDetails = (id: number) => {
        dispatch(pageActions.setFormView(true));
        dispatch(pageActions.setTaskId(id));
    };

    const renderItems = () => tasks.map((item) => (
        <TaskItem
            item={item}
            key={item.title}
            className={styles.item}
            onClick={handleClickDetails}
            optionsButton
        />
    ));

    const handleClose = () => {
        dispatch(pageActions.setFormView(false));
    };

    return (
        <DynamicStoreReducerWrapper reducerKey="page" reducer={pageReducer}>
            <Page className={styles.section}>
                <TaskList
                    className={styles.taskList}
                    isLoading={isLoading}
                >
                    {renderItems()}
                </TaskList>
                {view && id !== undefined
                        && (
                            <TaskEditForm
                                id={id}
                                onClose={handleClose}
                            />
                        )}
            </Page>
        </DynamicStoreReducerWrapper>

    );
};

export default TodayPage;
