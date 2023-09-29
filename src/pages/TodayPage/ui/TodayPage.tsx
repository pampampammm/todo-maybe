import React, { useMemo, useState } from 'react';

import { Page, PageHeader } from 'widgets/Page';
import { TaskList } from 'entities/TaskList';

import TaskItem from 'entities/TaskList/ui/TaskItem/TaskItem';
import { tempTasks } from 'shared/temp/temp_tasks';
import { TaskSchema } from 'entities/TaskList/type/Task';
import { InputTheme } from 'shared/ui/Input/Input';
import styles from './TodayPage.module.scss';

const TodayPage = () => {
    const [details, setDetails] = useState<boolean>(false);
    const [detailsItem, setDetailsItem] = useState<TaskSchema | undefined>(tempTasks[2]);

    const headerComponent = useMemo(() => <PageHeader text="Today" notification={9} />, []);

    const handleClickDetails = (item: TaskSchema) => {
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
        <Page className={styles.page}>
            <div className={styles.content}>
                <TaskList className={styles.taskList} inputTheme={InputTheme.OUTLINE}>
                    {renderItems()}
                </TaskList>
            </div>
        </Page>
    );
};

export default TodayPage;
