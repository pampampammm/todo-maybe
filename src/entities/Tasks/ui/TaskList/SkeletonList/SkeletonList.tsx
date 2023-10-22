import React from 'react';
import { AddTaskField } from 'features/addTaskInputField';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './SkeletonList.module.scss';

const SkeletonList = () => (
    <div className={styles.wrapper}>
        <div className={styles.body}>
            <div className={styles.listHeader} style={{ width: 600 }} />
            <div className={styles.list} />
        </div>
    </div>
);

export default SkeletonList;
