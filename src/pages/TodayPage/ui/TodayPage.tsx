import {Page, PageHeader} from "widgets/Page";
import {TaskList} from "entities/TaskList";

import styles from './TodayPage.module.scss'

const TodayPage = () => {
    return (
        <Page classname={styles.page}>
            <PageHeader text={'Today'} notification={9}/>
            <div className={styles.content}>
                <TaskList className={styles.taskList}/>
            </div>
        </Page>
    )
}

export default TodayPage