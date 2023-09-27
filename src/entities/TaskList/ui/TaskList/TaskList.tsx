import React, {useEffect} from "react";

import Input from "shared/Input/Input";

import classNames from "classnames"
import styles from "./TaskList.module.scss";
import TaskItem from "entities/TaskList/ui/TaskItem/TaskItem";


interface ListProps {
    text?: string
    className?: string
    border?: boolean
}

const TaskList = (props: ListProps) => {
    const {text, className, border = false} = props

    useEffect(() => {

    }, [])

    const mods: Record<string, boolean> = {
        [styles.border]: border,
    };

    const handleChange = (value: string) => {

    }

    return (
        <div className={classNames(styles.wrapper, mods, [className])}>
            {text && <h2 className={styles.listHeader}>
                        {text}
                    </h2>}

            <div className={styles.body}>
                <Input
                    placeholder={'Add New Task...'}
                    onChange={handleChange}
                    className={styles.input}
                />
                <ul className={styles.list}>
                    <TaskItem isLoading={false} className={styles.item}/>
                    <TaskItem isLoading={false} className={styles.item}/>
                    <TaskItem isLoading={false} className={styles.item}/>
                    <TaskItem isLoading={false} className={styles.item}/>
                </ul>
            </div>
        </div>
    )
}

export default TaskList;

