import React from 'react';
import styles from './Notificatiom.module.scss';

interface Notification {
    number: number
}

const Notification = (props: Notification) => {
    const { number } = props;

    return (
        <h2 className={styles.notification}>
            {number}
        </h2>
    );
};

export default Notification;
