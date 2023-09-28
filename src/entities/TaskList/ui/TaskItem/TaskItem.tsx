import React, {useState} from "react";

import {TaskSchema} from "entities/TaskList/type/Task";

import styles from './TaskItem.module.scss'
import classNames from "classnames";
import {StyledProps} from "shared/types/types";


interface TaskItemProps extends StyledProps {
    item?: TaskSchema
    isLoading?: boolean,
    onClick?: (item: TaskSchema) => void;
}

const TaskItem = (props: TaskItemProps) => {
    const {
        item,
        isLoading = false,
        className,
        onClick,
    } = props
    const [moreOptions, setOptions] = useState<boolean>(false)


    if (isLoading) {
        return (
            <div className={styles.skeleton}>

            </div>
        )
    }

    const handleToggleClick = () => {
        setOptions(moreOptions => !moreOptions)
    };

    const handleDetailsClick = () => {
        if (moreOptions)
            onClick(item)
    };

    return (
        <li onClick={handleDetailsClick} className={classNames(styles.wrapper, [className])}>
            <div className={styles.taskContent}>
                <div className={styles.header}>
                    <div className={styles.task}>
                        <input
                            type={"checkbox"}
                            className={styles.checkbox}
                        />
                        <span className={styles.title}>{item.title}</span>
                    </div>
                    <button
                        onClick={handleToggleClick}
                        className={styles.moreDescToggleButton}
                    >
                        {">"}
                    </button>
                </div>
                {moreOptions &&
                    <div className={styles.more}>
                        {item.time.startDate} - {item.time.endDate}
                        {" | 1 Suad | Primary"}
                    </div>
                }
            </div>
        </li>
    )
}

export default TaskItem