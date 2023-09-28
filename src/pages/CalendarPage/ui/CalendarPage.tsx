import React, {useMemo} from "react";

import {Page, PageHeader} from "widgets/Page";
import {CalendarDay} from "entities/Calendar";
import {Tabs} from "shared/ui/Tabs/ui/Tabs/Tabs";
import CalendarWeek from "entities/Calendar/ui/CalendarWeek/ui/CalendarWeek/CalendarWeek";
import Tab from "shared/ui/Tabs/ui/Tab/Tab";
import CalendarMonth from "entities/Calendar/ui/CalendarMonth/CalendarMonth";
import {temp_Tasks} from "shared/temp/temp_Tasks";

import styles from './CalendarPage.module.scss'


const CalendarPage = () => {

    function handleTabChange() {

    }


    const headerComponent = useMemo(() =>
        <PageHeader text={'Today'} notification={9}/>, [])

    return (
        <Page className={styles.calendarPage}
              header={headerComponent}>
            <Tabs onChange={handleTabChange}
                  defaultValue={'day'}
                  className={styles.calendarContent}>
                <Tab value={'day'} label={'Day'}>
                    <CalendarDay items={temp_Tasks}/>
                </Tab>
                <Tab value={'week'} label={'Week'}>
                    <CalendarWeek items={temp_Tasks}/>
                </Tab>
                <Tab value={'month'} label={'Month'}>
                    <CalendarMonth items={temp_Tasks}/>
                </Tab>
            </Tabs>
        </Page>
    )
}

export default CalendarPage