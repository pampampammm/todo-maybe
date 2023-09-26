import React, {useState} from "react";


import {TaskSchema} from "./type/Task";
import styles from './TaskItem.module.scss'
import classNames from "classnames";


interface TaskItemProps {
    item?: TaskSchema
    isLoading: boolean,
    className?: string

}

const TaskItem = (props: TaskItemProps) => {
    const {item, isLoading, className} = props
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

    return (
        <div className={classNames(styles.wrapper, [className])}>
            <div className={styles.taskContent}>
                <div className={styles.task}>
                    <input
                        type={"checkbox"}
                        className={styles.checkbox}
                    />
                    <span>Items fucking text</span>
                </div>
                <button
                    onClick={handleToggleClick}
                    className={styles.moreDescToggleButton}
                >
                    {">"}
                </button>
            </div>
            {moreOptions &&
                <div className={styles.moreDescription}>
                    {"22-02-23"}
                </div>
            }

        </div>
    )
}

export default TaskItem