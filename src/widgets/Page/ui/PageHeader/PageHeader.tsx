import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './PageHeader.module.scss';

interface HeaderProps {
    className?: string
    children?: ReactNode
}

const PageHeader = (props: HeaderProps) => {
    const {
        className,
        children,
    } = props;

    return (
        <div className={classNames(styles.pageHeader, className)}>
            {children}
        </div>
    );
};

export default PageHeader;
