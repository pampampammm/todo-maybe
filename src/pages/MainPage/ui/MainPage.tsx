import React, {
    memo, useEffect, useMemo,
} from 'react';

import { Page } from 'widgets/Page';
import { TaskEntity } from 'entities/Tasks/model/type/Task';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';
import { TaskEditForm, TaskList, taskFormActions } from 'entities/Tasks';
import { useAppDispatch } from 'app/StoreProvider';
import DynamicStoreReducerWrapper from 'shared/components/StoreReducerWrapper/StoreReducerWrapper';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    getMainPageError,
    getMainPageLoading,
    getMainPageTaskFormId,
    getMainPageView,
} from 'pages/MainPage/model/selectors/MainPageSelectors';
import { fetchTaskByDate } from 'pages/MainPage/model/services/fetchTasksByDate';
import { getTasks, mainPageActions, mainPageReducer } from '../model/slice/MainPageSlice';
import styles from './MainPage.module.scss';

const MainPage = memo(() => {
    const dispatch = useAppDispatch();
    const tasks = useSelector(getTasks.selectAll);
    const isError = useSelector(getMainPageError);
    const isLoading = useSelector(getMainPageLoading);
    const view = useSelector(getMainPageView);
    const id = useSelector(getMainPageTaskFormId);

    const handleClose = () => {
        dispatch(mainPageActions.setFormView(false));
    };

    useEffect(() => {
        dispatch(fetchTaskByDate());
    }, [tasks]);

    const handleClickDetails = (item: TaskEntity) => {
        dispatch(mainPageActions.setFormView(true));
        dispatch(mainPageActions.setTaskId(item.id));
    };

    const renderItems = useMemo(() => tasks?.map((item) => (
        <TaskItem
            item={item}
            key={item.title}
            className={styles.item}
            onClick={handleClickDetails}
        />
    )), [tasks]);

    const mods: Record<string, boolean> = {
        [styles.details]: view,
    };

    return (
        <DynamicStoreReducerWrapper reducerKey="mainPage" reducer={mainPageReducer}>
            <Page className={styles.section} headerText="Main">
                <div className={classNames(styles.content, mods)}>
                    <div className={styles.lists}>
                        <TaskList isLoading={isLoading} border text="Today" className={styles.bigList}>
                            {renderItems}
                        </TaskList>
                        <TaskList isLoading={isLoading} border text="Tomorrow">
                            {renderItems}
                        </TaskList>
                        <TaskList isLoading={isLoading} border text="This week">
                            {renderItems}
                        </TaskList>
                    </div>
                    {view && id !== undefined
                        && (
                            <TaskEditForm
                                id={id}
                                onClose={handleClose}
                            />
                        )}
                </div>
            </Page>
        </DynamicStoreReducerWrapper>

    );
});

export default MainPage;
