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
        <div className={styles.pageHeader}>
            <h2>{text}</h2>
            {notification
                && (
                    <div className={styles.notification}>
                        {notification}
                    </div>
                )}

        </div>
    );
};

export default PageHeader;
