import styles from './SkeletonCatalogItem.module.css';

export const SkeletonCatalogItem = () => (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.avatar} />
            <div className={styles.typographyBlock}>
                <div className={styles.lineSmall} />
                <div className={styles.lineLong} />
            </div>
        </div>
    </div>
);
