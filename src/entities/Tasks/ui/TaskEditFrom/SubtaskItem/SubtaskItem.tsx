import React from 'react';

import { StyledProps } from 'shared/types/types';
import { TaskEntity } from 'entities/Tasks';
import { SubTask } from 'entities/Tasks/model/type/Task';

import styles from './SybtaskItem.module.scss';

interface ItemProps extends StyledProps {
    item?: SubTask
    isLoading?: boolean,
    onClick?: (item: TaskEntity) => void;
}

const SubtaskItem = (props: ItemProps) => {
    const {
        isLoading = false,
        item,
        onClick,
    } = props;

    if (isLoading) {
        return (
            <div className={styles.skeleton} />
        );
    }

    return (
        <li className={styles.wrapper}>
            <div className={styles.taskContent}>
                <div className={styles.header}>
                    <div className={styles.task}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                        />
                        <p className={styles.title}>
                            {item.title}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default SubtaskItem;
