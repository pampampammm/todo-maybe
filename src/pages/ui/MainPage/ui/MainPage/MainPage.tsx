import React, {
    memo, useEffect,
} from 'react';
import { useSelector } from 'react-redux';

import { Page, PageHeader } from 'widgets/Page';
import { useAppDispatch } from 'app/StoreProvider';
import { fetchTasks } from 'pages/model/services/fetchTasks';
import { getPageTaskFormId, getPageView } from 'pages/model/selectors/pageSelectors';

import MainPageGridList from 'pages/ui/MainPage/ui/MainPageGridList/MainPageGridList';
import { TaskEditForm } from 'features/editTaskForm';
import { useInitPageEffect } from 'pages/model/lib/useInitPageEffect';
import { DynamicStoreReducerWrapper } from 'shared/components/DynamicStoreReducerWrapper';
import { pageActions, pageReducer } from '../../../../model/slice/pageSlice';
import styles from './MainPage.module.scss';

const MainPage = memo(() => {
    const view = useSelector(getPageView);
    const id = useSelector(getPageTaskFormId);
    const dispatch = useAppDispatch();

    useInitPageEffect(() => {
        dispatch(fetchTasks());
    });

    const handleClose = () => {
        dispatch(pageActions.setFormView(false));
    };

    const handleClickDetails = (id: string) => {
        dispatch(pageActions.setFormView(true));
        dispatch(pageActions.setTaskId(id));
    };

    return (
        <DynamicStoreReducerWrapper reducerKey="page" reducer={pageReducer} removeAfterUnmount={false}>
            <Page className={styles.section}>
                <PageHeader>
                    <h3>Main</h3>
                </PageHeader>
                <div className={styles.lists}>
                    <MainPageGridList
                        onTaskClick={handleClickDetails}
                    />
                    {view && (
                        <TaskEditForm
                            id={id}
                            onClose={handleClose}
                            onSubmit={handleClose}
                        />
                    )}
                </div>
            </Page>
        </DynamicStoreReducerWrapper>
    );
});

export default MainPage;
