import { useSelector } from 'react-redux';

import { Page, PageHeader } from 'widgets/Page';
import { TaskList } from 'entities/Tasks';
import { useAppDispatch } from 'app/StoreProvider';
import { fetchTasks } from 'pages/model/services/fetchTasks';
import { getPageLoading, getPageTaskFormId, getPageView } from 'pages/model/selectors/pageSelectors';
import { TaskEditForm } from 'features/editTaskForm';
import { DynamicStoreReducerWrapper } from 'shared/components/DynamicStoreReducerWrapper';
import { getTasks, pageActions, pageReducer } from '../../model/slice/pageSlice';
import { useInitPageEffect } from '../../model/lib/useInitPageEffect';
import styles from './TodayPage.module.scss';

const TodayPage = () => {
    const tasks = useSelector(getTasks.selectAll);
    const isLoading = useSelector(getPageLoading);
    const view = useSelector(getPageView);
    const id = useSelector(getPageTaskFormId);

    const dispatch = useAppDispatch();

    useInitPageEffect(() => {
        dispatch(fetchTasks());
    });

    const handleClickDetails = (id: string) => {
        dispatch(pageActions.setFormView(true));
        dispatch(pageActions.setTaskId(id));
    };

    const handleClose = () => {
        dispatch(pageActions.setFormView(false));
    };

    return (
        <DynamicStoreReducerWrapper reducerKey="page" reducer={pageReducer} removeAfterUnmount={false}>
            <Page className={styles.section}>
                <PageHeader>
                    <h3>Today</h3>
                </PageHeader>
                <div className={styles.content}>
                    <TaskList
                        items={tasks}
                        className={styles.taskList}
                        isLoading={isLoading}
                        onTaskClick={handleClickDetails}
                    />
                    {view && (
                        <TaskEditForm
                            className={styles.editForm}
                            id={id}
                            onClose={handleClose}
                        />
                    )}
                </div>
            </Page>
        </DynamicStoreReducerWrapper>
    );
};

export default TodayPage;
