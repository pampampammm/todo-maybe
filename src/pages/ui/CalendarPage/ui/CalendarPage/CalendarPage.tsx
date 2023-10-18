import React, { useEffect } from 'react';

import { Page } from 'widgets/Page';

import { useSelector } from 'react-redux';
import { getPageLoading } from 'pages/model/selectors/pageSelectors';
import { useAppDispatch } from 'app/StoreProvider';
import { fetchTaskByDate } from 'pages/model/services/fetchTasksByDate';
import DynamicStoreReducerWrapper from 'shared/components/StoreReducerWrapper/StoreReducerWrapper';
import { getTasks, pageReducer } from 'pages/model/slice/pageSlice';
import { Tabs } from 'shared/ui/Tabs/ui/Tabs/Tabs';
import Tab from 'shared/ui/Tabs/ui/Tab/Tab';
import styles from './CalendarPage.module.scss';
import CalendarDay from '../CalendarDay/CalendarDay';
import CalendarWeek from '../CalendarWeek/CalendarWeek';
import CalendarMonth from '../CalendarMonth/CalendarMonth';

const CalendarPage = () => {
    const tasks = useSelector(getTasks.selectAll);
    const isLoading = useSelector(getPageLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTaskByDate());
    }, [dispatch]);

    function handleTabChange() {

    }

    return (
        <DynamicStoreReducerWrapper reducerKey="page" reducer={pageReducer}>
            <Page className={styles.calendarPage} headerText="Calendar">
                <Tabs
                    onChange={handleTabChange}
                    className={styles.calendarContent}
                    defaultValue="day"
                >
                    <Tab value="day" label="Day">
                        <CalendarDay items={tasks} isLoading={isLoading} />
                    </Tab>
                    <Tab value="week" label="Week">
                        <CalendarWeek items={tasks} isLoading={isLoading} />
                    </Tab>
                    <Tab value="month" label="Month">
                        <CalendarMonth items={tasks} isLoading={isLoading} />
                    </Tab>
                </Tabs>
            </Page>
        </DynamicStoreReducerWrapper>

    );
};

export default CalendarPage;
