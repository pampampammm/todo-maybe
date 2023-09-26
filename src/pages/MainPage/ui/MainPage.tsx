import React from "react";

import {TaskList} from "entities/TaskList";
import {Page, PageHeader} from "widgets/Page";

import styles from './MainPage.module.scss'

const MainPage = () => {
    return (
        <Page classname={styles.pageSection}>
            <PageHeader text={"Main"} notification={19}/>
            <div className={styles.content}>
                <TaskList border text={'Today'}  className={styles.bigList}/>
                <TaskList border text={'Tomorrow'} className={styles.simpleList}/>
                <TaskList border text={'This week'}  className={styles.simpleList}/>
            </div>
        </Page>
    )
}

export default MainPage