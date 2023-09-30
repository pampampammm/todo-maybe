import React, { useMemo, useState } from 'react';

import { Page, PageHeader } from 'widgets/Page';
import TaskDetails from 'entities/TaskDetails/ui/TaskDetails';
import { tempTasks } from 'shared/temp/temp_tasks';
import { TaskSchema } from 'entities/Tasks/model/type/Task';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';
import { TaskList } from 'entities/Tasks';

import classNames from 'classnames';
import styles from './MainPage.module.scss';

const MainPage = () => {
    const [details, setDetails] = useState<boolean>(false);
    const [detailsItem, setDetailsItem] = useState<TaskSchema | undefined>(tempTasks[2]);

    const handleClose = () => {
        setDetails((prevState) => !prevState);
    };

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
        />
    ));

    return (
        <Page className={styles.section} headerText="Main">
            <div className={classNames(styles.content, { [styles.details]: details })}>
                <div className={styles.lists}>
                    <TaskList
                        border
                        text="Today"
                        className={styles.bigList}
                    >
                        {renderItems()}
                    </TaskList>
                    <TaskList
                        border
                        text="Tomorrow"
                    >
                        {renderItems()}
                    </TaskList>
                    <TaskList
                        border
                        text="This week"
                    >
                        {renderItems()}
                    </TaskList>
                </div>
                {!details
                    && (
                        <TaskDetails
                            item={detailsItem}
                            onClose={handleClose}
                        />
                    )}
            </div>
        </Page>
    );
};

export default MainPage;
