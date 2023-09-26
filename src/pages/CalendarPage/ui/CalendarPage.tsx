import {Page, PageHeader} from "widgets/Page";
import {CalendarDay} from "entities/Calendar";
import {Tabs} from "shared/ui/Tabs/ui/Tabs/Tabs";
import CalendarWeek from "entities/Calendar/ui/CalendarWeek/ui/CalendarWeek/CalendarWeek";
import Tab from "shared/ui/Tabs/ui/Tab/Tab";
import CalendarMonth from "entities/Calendar/ui/CalendarMonth/CalendarMonth";
import {TaskSchema} from "entities/TaskItem";

import styles from './CalendarPage.module.scss'

const tempTaskItems: TaskSchema[] = [
    {
        time: {startDate: 0, endDate: 210},
        completed: false,
        title: "Good morning",
        userId: 1,
    },
    {
        time: {startDate: 220, endDate: 320},
        completed: false,
        title: "Launch",
        userId: 1,
    },
    {
        time: {startDate: 400, endDate: 680},
        completed: false,
        title: "Lorem some taks",
        userId: 1,
    },
    {
        time: {startDate: 820, endDate: 1300},
        completed: false,
        title: "Lorem some taks",
        userId: 1,
    },
]

const CalendarPage = () => {

    function handleTabChange() {

    }

    return (
        <Page classname={styles.calendarPage}>
            <PageHeader text={"Calendar"}/>
            <Tabs onChange={handleTabChange}
                  defaultValue={'day'}
                  className={styles.calendarContent}
            >
                <Tab value={'day'} label={'Day'}>
                    <CalendarDay items={tempTaskItems}/>
                </Tab>
                <Tab value={'week'} label={'Week'}>
                    <CalendarWeek items={tempTaskItems}/>
                </Tab>
                <Tab value={'month'} label={'Month'}>
                    <CalendarMonth items={tempTaskItems}/>
                </Tab>
            </Tabs>
        </Page>
    )
}

export default CalendarPage