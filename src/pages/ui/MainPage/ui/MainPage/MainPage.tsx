import React, {
    memo, useEffect,
} from 'react';
import { useSelector } from 'react-redux';

import { Page } from 'widgets/Page';
import { useAppDispatch } from 'app/StoreProvider';
import DynamicStoreReducerWrapper from 'shared/components/StoreReducerWrapper/StoreReducerWrapper';
import { pageActions, pageReducer } from 'pages/model/slice/pageSlice';
import { fetchTaskByDate } from 'pages/model/services/fetchTasksByDate';
import TaskEditForm from 'features/editTaskForm/ui/TaskEditForm';
import { getPageTaskFormId, getPageView } from 'pages/model/selectors/pageSelectors';

import MainPageGridList from 'pages/ui/MainPage/ui/MainPageGridList/MainPageGridList';
import styles from './MainPage.module.scss';

const MainPage = memo(() => {
    const dispatch = useAppDispatch();
    const view = useSelector(getPageView);
    const id = useSelector(getPageTaskFormId);

    useEffect(() => {
        dispatch(fetchTaskByDate());
    }, [dispatch]);

    const handleClose = () => {
        dispatch(pageActions.setFormView(false));
    };

    const handleClickDetails = (id: number) => {
        dispatch(pageActions.setFormView(true));
        dispatch(pageActions.setTaskId(id));
    };

    return (
        <DynamicStoreReducerWrapper reducerKey="page" reducer={pageReducer}>
            <Page className={styles.section}>
                <MainPageGridList
                    onTaskClick={handleClickDetails}
                />
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
});

export default MainPage;
