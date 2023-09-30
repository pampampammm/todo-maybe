import React, { useMemo } from 'react';

import { Page, PageHeader } from 'widgets/Page';
import { CalendarDay } from 'entities/Calendar';
import { Tabs } from 'shared/ui/Tabs/ui/Tabs/Tabs';
import CalendarWeek from 'entities/Calendar/ui/CalendarWeek/ui/CalendarWeek/CalendarWeek';
import Tab from 'shared/ui/Tabs/ui/Tab/Tab';
import CalendarMonth from 'entities/Calendar/ui/CalendarMonth/CalendarMonth';
import { tempTasks } from 'shared/temp/temp_tasks';

import styles from './CalendarPage.module.scss';

const CalendarPage = () => {
    function handleTabChange() {

    }

    return (
        <Page className={styles.calendarPage} headerText="Calendar">
            <Tabs
                onChange={handleTabChange}
                defaultValue="day"
                className={styles.calendarContent}
            >
                <Tab value="day" label="Day">
                    <CalendarDay items={tempTasks} />
                </Tab>
                <Tab value="week" label="Week">
                    <CalendarWeek items={tempTasks} />
                </Tab>
                <Tab value="month" label="Month">
                    <CalendarMonth items={tempTasks} />
                </Tab>
            </Tabs>
        </Page>
    );
};

export default CalendarPage;
