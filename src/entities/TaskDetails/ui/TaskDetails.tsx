import React, {ChangeEvent} from 'react';

import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {StyledProps} from "shared/types/types";

import Input, {InputTheme} from "shared/ui/Input/Input";
import {TaskSchema} from "entities/TaskList/type/Task";

import styles from './TaskDetails.module.scss'
import classNames from "classnames";
import {Dropdown} from "shared/ui/Dropdown";
import {TaskList} from "entities/TaskList";
import TaskItem from "entities/TaskList/ui/TaskItem/TaskItem";
import {temp_Tasks} from "shared/temp/temp_Tasks";


interface DetailsProps extends StyledProps {
    onClose?: () => void,
    item: TaskSchema
}

const dropdownItem = {title: 'time', list: [{label: 'shit', value: 'gay', id: 1}]}

const TaskDetails = (props: DetailsProps) => {
    const {
        className,
        onClose,
        item
    } = props

    const handleClose = () => {
        onClose()
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const newValue = e.target.value

        if (newValue || newValue.length !== 0)
            console.log('bruh')
    };

    if (item === undefined) {
        return
    }

    return (
        <div className={classNames(styles.section, [className])}>
            <h2 className={styles.header}>
                <span>Task:</span>
                <Button theme={ButtonTheme.CLEAR}
                        size={ButtonSize.M}
                        onClick={handleClose}
                >
                    {"X"}
                </Button>
            </h2>
            <form>
                <Input
                    type="text"
                    className={styles.titleInput}
                    theme={InputTheme.OUTLINE}
                    placeholder={item.title}/>
                <Input
                    type="text"
                    className={styles.descriptionInput}
                    theme={InputTheme.OUTLINE}
                    placeholder={item.description}/>
                <div className={styles.other}>
                    <label htmlFor={'list'}>List</label>
                    <Input id={'list'} type="text"/>
                    <label htmlFor={"date"}>Date </label>
                    <Dropdown items={dropdownItem}/>
                    <label>Tags</label>
                </div>
                <label className={styles.subtasks}>
                    <h2>Subtask: </h2>
                    <TaskList>
                        <TaskItem item={temp_Tasks[2]}/>
                        <TaskItem item={temp_Tasks[1]}/>
                    </TaskList>
                </label>
            </form>
        </div>
    );
};

export default TaskDetails;