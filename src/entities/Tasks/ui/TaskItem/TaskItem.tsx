import React, { useState } from 'react';

import { TaskEntity } from 'entities/Tasks/model/type/Task';
import { StyledProps } from 'shared/types/types';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import DateIcon from 'shared/assets/icons/CalendarIcon.svg';
import classNames from 'classnames';
import { ChipsArray } from 'shared/ui/TagsArray';
import { getFormattedDateValue, getParsedDate } from 'shared/lib/helpers/getFormattedDate';
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
    const { tags, title, time } = item;
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

    const dateToShow = getParsedDate(time.start);

    if (isLoading) {
        return (
            <div className={styles.skeleton} />
        );
    }

    return (
        <div className={classNames(styles.wrapper, [className])}>
            <div className={classNames(styles.taskContent, mods)}>
                <div className={styles.header}>
                    <div className={styles.task}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                        />

                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={handleClick}
                            className={classNames(styles.title, styles.options)}
                        >
                            {title}
                        </Button>
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
                                {time.start && getFormattedDateValue(dateToShow)}
                            </li>
                            <li className={styles.listItem}>
                                <ChipsArray items={tags} maxLength={3} />
                            </li>
                            {item.list && (
                                <span
                                    className={styles.list}
                                    style={{ backgroundColor: item?.list.color }}
                                >
                                    {item.list.label}
                                </span>
                            )}
                        </ul>
                    )}
            </div>
        </div>
    );
};

export default TaskItem;
