import React, {
    memo, useEffect,
} from 'react';
import { useSelector } from 'react-redux';

import { Page } from 'widgets/Page';
import { useAppDispatch } from 'app/StoreProvider';
import { pageActions } from 'pages/model/slice/pageSlice';
import { fetchTasks } from 'pages/model/services/fetchTasksByDate';
import { getPageTaskFormId, getPageView } from 'pages/model/selectors/pageSelectors';

import MainPageGridList from 'pages/ui/MainPage/ui/MainPageGridList/MainPageGridList';
import { TaskEditForm } from 'features/editTaskForm';
import styles from './MainPage.module.scss';

const MainPage = memo(() => {
    const view = useSelector(getPageView);
    const id = useSelector(getPageTaskFormId);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleClose = () => {
        dispatch(pageActions.setFormView(false));
    };

    const handleClickDetails = (id: string) => {
        dispatch(pageActions.setFormView(true));
        dispatch(pageActions.setTaskId(id));
    };

    return (
        <Page className={styles.section}>
            <MainPageGridList
                onTaskClick={handleClickDetails}
            />
            {view && id !== undefined
                        && (
                            <TaskEditForm
                                className={styles.editForm}
                                id={id}
                                onClose={handleClose}
                                onSubmit={handleClose}
                            />
                        )}
        </Page>

    );
});

export default MainPage;
