import React, { useState } from 'react';

import { TaskSchema } from 'entities/TaskList/type/Task';

import classNames from 'classnames';
import { StyledProps } from 'shared/types/types';
import { Button } from 'shared/ui/Button/Button';
import styles from './TaskItem.module.scss';

interface TaskItemProps extends StyledProps {
    item?: TaskSchema
    isLoading?: boolean,
    onClick?: (item: TaskSchema) => void;
    optionsButton?: boolean
}

const TaskItem = (props: TaskItemProps) => {
    const {
        isLoading = false,
        optionsButton = true,
        item,
        className,
        onClick,
    } = props;

    const [moreOptions, setOptions] = useState<boolean>(false);

    if (isLoading) {
        return (
            <div className={styles.skeleton} />
        );
    }

    const handleToggleClick = () => {
        setOptions((moreOptions) => !moreOptions);
    };

    const handleDetailsClick = () => {
        if (moreOptions) {
            onClick(item);
        }
    };

    return (
        <li className={classNames(styles.wrapper, [className])}>
            <div className={styles.taskContent}>
                <div className={styles.header}>
                    <div className={styles.task}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                        />
                        <span className={styles.title}>{item.title}</span>
                    </div>
                    {optionsButton
                        ? (
                            <Button
                                onClick={handleToggleClick}
                                className={styles.moreDescToggleButton}
                            >
                                {'>'}
                            </Button>
                        ) : null}

                </div>
                {moreOptions
                    && (
                        <div className={styles.more}>
                            {item.time.startDate}
                            {' '}
                            -
                            {item.time.endDate}
                            {' | 1 Suad | Primary'}
                        </div>
                    )}
            </div>
        </li>
    );
};

export default TaskItem;
