import React, { useState } from 'react';

import { TaskEntity } from 'entities/Tasks/model/type/Task';
import { StyledProps } from 'shared/types/types';
import { Button } from 'shared/ui/Button/Button';

import classNames from 'classnames';
import styles from './TaskItem.module.scss';

interface TaskItemProps extends StyledProps {
    item?: TaskEntity
    isLoading?: boolean,
    onClick?: (item: TaskEntity) => void;
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

    const handleOptionsToggle = () => {
        setOptions((moreOptions) => !moreOptions);
    };

    const handleClick = () => {
        setOptions((moreOptions) => !moreOptions);
        onClick(item);
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
                        <p
                            onClick={handleClick}
                            className={classNames(styles.title, styles.options)}
                        >
                            {item.title}
                        </p>
                    </div>
                    {optionsButton
                        ? (
                            <Button
                                onClick={handleOptionsToggle}
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
