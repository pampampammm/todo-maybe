import React, {useEffect} from "react";

import styles from "./TaskList.module.scss"
import InputField from "../../../shared/Input/Input";
import {TaskItem} from "entities/TaskItem";
import {ColoredLine} from "shared/ui/ColoredLine/ColoredLine";
import classNames from "classnames";
import cls from "*.scss";


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
        <div className={classNames(styles.wrapper,mods, [className])}>
            {text &&
                <div className={styles.listHeader}>
                    {text}
                </div>}

            <div className={styles.body}>
                <InputField
                    placeholder={'Add New Task...'}
                    onChange={handleChange}
                    className={styles.input}
                />
                <div className={styles.list}>
                    <TaskItem isLoading={false}/>
                    <ColoredLine/>
                    <TaskItem isLoading={false}/>
                    <ColoredLine/>
                    <TaskItem isLoading={false}/>
                    <ColoredLine/>
                    <TaskItem isLoading={false}/>
                </div>
            </div>
        </div>
    )
}

export default TaskList;

