import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getCalendarPageTab, getPanelDate } from 'pages/ui/CalendarPage/model/selectors/getCurrentDate/getCurrentDate';
import { getTasks, pageActions } from 'pages/model/slice/pageSlice';
import { useAppDispatch } from 'app/StoreProvider';
import { useCalendar } from 'shared/lib/hooks/useCalendar';
import { calendarPageActions } from 'pages/ui/CalendarPage';
import { CalendarPageTabs } from 'pages/ui/CalendarPage/model/types/types';
import { TaskEntity } from 'entities/Tasks';
import { Tab, Tabs } from 'shared/ui/Tabs';
import { CalendarMonth } from '../CalendarMonth';
import { CalendarWeek } from '../CalendarWeek';
import styles from './CalendarTabs.module.scss';

export interface TabsProps {
    isLoading: boolean
}

const CalendarTabs = memo((props: TabsProps) => {
    const {
        isLoading,
    } = props;

    const tab = useSelector(getCalendarPageTab);
    const currentDate = useSelector(getPanelDate);
    const tasks = useSelector(getTasks.selectAll);
    const dispatch = useAppDispatch();

    const {
        date,
        month,
        year,
        monthDateCells,
        weekDateCells,
        controls,
    } = useCalendar({
        selectedValue: new Date(
            currentDate.year,
            currentDate.month,
            currentDate.date,
        ),
    });

    const {
        switchMonthPrevious,
        switchMonthNext,
        switchDateNext,
        switchDatePrevious,
    } = controls;

    useEffect(() => {
        dispatch(calendarPageActions.setPanelMonth(month));
        dispatch(calendarPageActions.setPanelYear(year));
        dispatch(calendarPageActions.setPanelDate(date));
    }, [year, month, date]);

    const handleTabChange = (value: string) => {
        if (value === CalendarPageTabs.WEEK) {
            dispatch(calendarPageActions.setCalendarTab(CalendarPageTabs.WEEK));
            return;
        }

        if (value === CalendarPageTabs.MONTH) {
            dispatch(calendarPageActions.setCalendarTab(CalendarPageTabs.MONTH));
        }
    };

    const handleTaskClick = (task: TaskEntity) => {
        dispatch(pageActions.setTaskId(task.id));
    };

    return (
        <Tabs
            className={styles.calendarContent}
            defaultValue={tab}
            onChange={handleTabChange}
        >
            <Tab value={CalendarPageTabs.WEEK} label="Week">
                <CalendarWeek
                    tasks={tasks}
                    isLoading={isLoading}
                    weekDateCells={weekDateCells}
                    onSwitchWeekNext={switchDateNext}
                    onSwitchWeekPrev={switchDatePrevious}
                />
            </Tab>
            <Tab value={CalendarPageTabs.MONTH} label="Month">
                <CalendarMonth
                    items={tasks}
                    isLoading={isLoading}
                    dateCells={monthDateCells}
                    onSwitchMonthNext={switchMonthNext}
                    onSwitchMonthPrevious={switchMonthPrevious}
                />
            </Tab>
        </Tabs>
    );
});

export default CalendarTabs;
