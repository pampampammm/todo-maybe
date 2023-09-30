import Header from 'widgets/Header/ui/Header';
import styles from './PageHeader.module.scss';

interface HeaderProps {
    text: string,
    className?: string
    notification?: number
}

const PageHeader = (props: HeaderProps) => {
    const { className, text, notification } = props;

    return (
        <h2 className={styles.pageHeader}>
            {text}
            {notification
                && (
                    <div className={styles.notification}>
                        {notification}
                    </div>
                )}

        </h2>
    );
};

export default PageHeader;
