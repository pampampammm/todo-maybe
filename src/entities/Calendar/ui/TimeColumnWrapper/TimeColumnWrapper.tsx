import {
    ReactNode,
    useLayoutEffect, useMemo, useRef, useState,
} from 'react';

import classNames from 'classnames';
import { getPercentPlacement } from 'shared/helpers/getPercentPlacement';
import styles from './TimeColumnWrapper.module.scss';

const tempTime = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
];

interface TimeColumnProps {
    className?: string
    line?: boolean,
    children: ReactNode
}

function toInteger(number: number) {
    return Math.round(Number(number));
}

const TimeColumnWrapper = (props: TimeColumnProps) => {
    const {
        line = false,
        className,
        children,
    } = props;

    const columnRef = useRef(null);
    const [columnHeight, setColumnHeight] = useState(0);
    const [currentTime] = useState(330);

    const { position } = getPercentPlacement(columnHeight, currentTime, 1440);

    useLayoutEffect(() => {
        setColumnHeight(columnRef.current.clientHeight);
    }, [columnHeight]);

    const columnToRender = useMemo(() => tempTime.map((value) => (
        <div key={value} className={styles.timeBlock}>
            <span className={styles.time}>{value}</span>
        </div>
    )), []);

    return (
        <div className={classNames(styles.wrapper, className)}>
            <div ref={columnRef} className={styles.column}>
                {line && <hr className={styles.line} style={{ top: position }} />}
                {columnToRender}
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default TimeColumnWrapper;
