import styles from './PageHeader.module.scss'
import Header from "widgets/Header/ui/Header";

interface HeaderProps {
    text: string,
    className?: string
    notification?: number
}

const PageHeader = (props: HeaderProps) => {
    const {className, text, notification,} = props

    return (
        <div className={styles.pageHeader}>
            {text}
            {notification &&
                <div className={styles.notification}>
                    {notification}
                </div>}

        </div>
    )
}

export default PageHeader