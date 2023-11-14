import React, { useMemo } from 'react';
import { TaskList } from 'entities/Tasks';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';
import { useSelector } from 'react-redux';
import { getTasks } from 'pages/model/slice/pageSlice';
import { getPageLoading } from 'pages/model/selectors/pageSelectors';

import { getFormattedDate, getParsedDate } from 'shared/lib/helpers/getFormattedDate';
import styles from './MainPageGridList.module.scss';

interface ListProps {
    onTaskClick: (id: string) => void
}

const MainPageGridList = (props: ListProps) => {
    const {
        onTaskClick,
    } = props;

    const tasks = useSelector(getTasks.selectAll);
    const isLoading = useSelector(getPageLoading);

    const handleTaskClick = (id: string) => {
        if (onTaskClick) {
            onTaskClick(id);
        }
    };

    return (
        <div className={styles.wrapper}>
            <TaskList
                isLoading={isLoading}
                onTaskClick={handleTaskClick}
                border
                text="Today"
                items={tasks}
                className={styles.bigList}
                overflow
            />
            <TaskList
                isLoading={isLoading}
                onTaskClick={handleTaskClick}
                border
                items={tasks}
                text="Tomorrow"
                overflow
            />
            <TaskList
                isLoading={isLoading}
                onTaskClick={handleTaskClick}
                border
                items={tasks}
                text="This week"
                overflow
            />
        </div>
    );
};

export default MainPageGridList;
