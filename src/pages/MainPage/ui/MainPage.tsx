import React, {useMemo, useState} from "react";

import {TaskList} from "entities/TaskList";
import {Page, PageHeader} from "widgets/Page";
import TaskDetails from "entities/TaskDetails/ui/TaskDetails";

import styles from './MainPage.module.scss'
import classNames from "classnames";

const MainPage = () => {
    const [details, setDetails] = useState<boolean>(tr)

    const headerComponent = useMemo(() =>
        <PageHeader text={"Main"} notification={19}/>, [])

    return (
        <Page className={styles.section} header={headerComponent}>
            <div className={classNames(styles.content, {[styles.detailsActive]: details})}>
                <div className={styles.lists}>
                    <TaskList border text={'Today'} className={styles.bigList}/>
                    <TaskList border text={'Tomorrow'}/>
                    <TaskList border text={'This week'}/>
                </div>
                {details && <TaskDetails/>}
            </div>
            {/*<button onClick={() => setDetails(prevState => !prevState)}>*/}
            {/*    details*/}
            {/*</button>*/}
        </Page>
    )
}

export default MainPage