import React, { useState } from 'react';

import { TaskEntity } from 'entities/Tasks/model/type/Task';
import { StyledProps } from 'shared/types/types';
import { Button } from 'shared/ui/Button/Button';
import DateIcon from 'shared/assets/icons/CalendarIcon.svg';
import classNames from 'classnames';
import { ChipsArray } from 'shared/ui/TagsArray';
import { DATE_TYPE, getFormatDate } from 'shared/lib/helpers/getFormatDate';
import styles from './TaskItem.module.scss';

interface TaskItemProps extends StyledProps {
    item?: TaskEntity
    isLoading?: boolean,
    onClick?: (id: string) => void;
    active?: boolean
}

const TaskItem = (props: TaskItemProps) => {
    const {
        isLoading = false,
        item,
        className,
        onClick,
        active,
    } = props;

    const [moreOptions, setOptions] = useState<boolean>(false);
    const {
        tags,
        title,
        time,
        list,
    } = item;

    if (isLoading) {
        return (
            <div className={styles.skeleton} />
        );
    }

    const handleOptionsToggle = () => {
        setOptions((prevState) => !prevState);
    };

    const handleClick = () => {
        if (onClick) {
            onClick(item.id);
        }

        setOptions((prevState) => !prevState);
    };

    const mods: Record<string, boolean> = {
        [styles.active]: active,
    };

    // @ts-ignore
    return (
        <div className={classNames(styles.wrapper, [className])}>
            <div className={classNames(styles.taskContent, mods)}>
                <div className={styles.header}>
                    <div className={styles.task}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                        />
                        {/* eslint-disable-next-line max-len */}
                        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                        <p
                            onClick={handleClick}
                            className={classNames(styles.title, styles.options)}
                        >
                            {title}
                        </p>
                    </div>
                    <Button
                        onClick={handleOptionsToggle}
                        className={styles.moreDescToggleButton}
                    >
                        {'>'}
                    </Button>
                </div>
                {moreOptions
                    && (
                        <ul className={styles.more}>
                            <li className={styles.listItem}>
                                <DateIcon className={styles.icon} />
                                {time.startDate.slice(0, 10)}
                            </li>
                            <li className={styles.listItem}>
                                <ChipsArray items={tags} maxLength={3} />
                            </li>
                        </ul>
                    )}
            </div>
        </div>
    );
};

export default TaskItem;
