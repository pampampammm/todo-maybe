import React, { useMemo, useState } from 'react';

import { Page, PageHeader } from 'widgets/Page';

import { InputTheme } from 'shared/ui/Input/Input';
import { TaskEntity } from 'entities/Tasks/model/type/Task';
import { tempTasks } from 'shared/temp/temp_tasks';
import { TaskList } from 'entities/Tasks';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';

import styles from './TodayPage.module.scss';

const TodayPage = () => {
    const [details, setDetails] = useState<boolean>(false);
    const [detailsItem, setDetailsItem] = useState<TaskEntity | undefined>(tempTasks[2]);

    const handleClickDetails = (item: TaskEntity) => {
        if (details) { setDetails((prevState) => !prevState); }

        setDetailsItem(item);
    };

    const renderItems = () => tempTasks.map((item) => (
        <TaskItem
            item={item}
            key={item.title}
            className={styles.item}
            onClick={handleClickDetails}
            optionsButton
        />
    ));

    return (
        <Page className={styles.page} headerText="Today">
            <div className={styles.content}>
                <TaskList className={styles.taskList} inputTheme={InputTheme.OUTLINE}>
                    {renderItems()}
                </TaskList>
            </div>
        </Page>
    );
};

export default TodayPage;
