import React, {useMemo, useState} from "react";

import {Page, PageHeader} from "widgets/Page";
import {TaskList} from "entities/TaskList";

import styles from './TodayPage.module.scss'
import TaskItem from "entities/TaskList/ui/TaskItem/TaskItem";
import {temp_Tasks} from "shared/temp/temp_Tasks";
import {TaskSchema} from "entities/TaskList/type/Task";


const TodayPage = () => {
    const [details, setDetails] = useState<boolean>(false)
    const [detailsItem, setDetailsItem] = useState<TaskSchema | undefined>(temp_Tasks[2])

    const headerComponent = useMemo(() =>
        <PageHeader text={'Today'} notification={9}/>, [])

    const renderItems = () => temp_Tasks.map((item) =>
        <TaskItem
            item={item}
            key={item.title}
            className={styles.item}
            onClick={handleClickDetails}
        />)

    const handleClickDetails = (item: TaskSchema) => {
        if (details)
            setDetails(prevState => !prevState)

        setDetailsItem(item)
    };

    return (
        <Page className={styles.page} header={headerComponent}>
            <div className={styles.content}>
                <TaskList className={styles.taskList}>
                    {renderItems()}
                </TaskList>
            </div>
        </Page>
    )
}

export default TodayPage