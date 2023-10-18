import React, { useMemo } from 'react';
import { TaskList } from 'entities/Tasks';
import TaskItem from 'entities/Tasks/ui/TaskItem/TaskItem';
import { useSelector } from 'react-redux';
import { getTasks } from 'pages/model/slice/pageSlice';
import { getPageLoading } from 'pages/model/selectors/pageSelectors';

import styles from './MainPageGridList.module.scss';

interface ListProps {
    onTaskClick: (id: number) => void
}

const MainPageGridList = (props: ListProps) => {
    const {
        onTaskClick,
    } = props;

    const tasks = useSelector(getTasks.selectAll);
    const isLoading = useSelector(getPageLoading);

    const handleTaskClick = (id: number) => {
        if (onTaskClick) onTaskClick(id);
    };

    const renderItems = useMemo(() => tasks?.map((item) => (
        <TaskItem
            item={item}
            key={item.title}
            className={styles.item}
            onClick={handleTaskClick}
        />
    )), [tasks]);

    return (
        <div className={styles.lists}>
            <TaskList isLoading={isLoading} border text="Today" className={styles.bigList}>
                {renderItems}
            </TaskList>
            <TaskList isLoading={isLoading} border text="Tomorrow">
                {renderItems}
            </TaskList>
            <TaskList isLoading={isLoading} border text="This week">
                {renderItems}
            </TaskList>
        </div>
    );
};

export default MainPageGridList;
