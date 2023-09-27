import React, {useMemo, useState} from "react";

import {Page, PageHeader} from "widgets/Page";
import {TaskList} from "entities/TaskList";

import styles from './TodayPage.module.scss'


const TodayPage = () => {
    const [details, setDetails] = useState<boolean>(false)

    const headerComponent = useMemo(() =>
        <PageHeader text={'Today'} notification={9}/>, [])

    return (
        <Page className={styles.page} header={headerComponent}>
            <div className={styles.content}>
                <TaskList className={styles.taskList}/>
            </div>
        </Page>
    )
}

export default TodayPage