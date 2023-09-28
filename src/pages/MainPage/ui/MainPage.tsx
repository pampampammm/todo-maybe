import React, {useMemo, useState} from "react";
import {useParams} from "react-router-dom";

import {TaskList} from "entities/TaskList";
import {Page, PageHeader} from "widgets/Page";
import TaskDetails from "entities/TaskDetails/ui/TaskDetails";
import TaskItem from "entities/TaskList/ui/TaskItem/TaskItem";
import {TaskSchema} from "entities/TaskList/type/Task";
import {temp_Tasks} from "shared/temp/temp_Tasks";

import styles from './MainPage.module.scss'
import classNames from "classnames";


const MainPage = () => {
    const [details, setDetails] = useState<boolean>(false)
    const [detailsItem, setDetailsItem] = useState<TaskSchema | undefined>(temp_Tasks[2])

    const headerComponent = useMemo(() =>
        <PageHeader text={"Main"} notification={19}/>, [])

    const handleClose = () => {
        setDetails(prevState => !prevState)
    };

    const handleClickDetails = (item: TaskSchema) => {
        if (details)
            setDetails(prevState => !prevState)

        setDetailsItem(item)
    };

    const renderItems = () => temp_Tasks.map((item) =>
        <TaskItem
            item={item}
            key={item.title}
            className={styles.item}
            onClick={handleClickDetails}
        />)

    return (
        <Page className={styles.section} header={headerComponent}>
            <div className={classNames(styles.content, {[styles.detailsActive]: details})}>
                <div className={styles.lists}>
                    <TaskList border text={'Today'} className={styles.bigList}>
                        {renderItems()}
                    </TaskList>
                    <TaskList border text={'Tomorrow'}>
                        {renderItems()}
                    </TaskList>
                    <TaskList border text={'This week'}>
                        {renderItems()}
                    </TaskList>
                </div>
                {!details &&
                    <TaskDetails
                        item={detailsItem}
                        onClose={handleClose}
                    />}
            </div>
        </Page>
    )
}

export default MainPage