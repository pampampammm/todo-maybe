
import styles from "./SkeletonCatalogItem.module.css"

export const SkeletonCatalogItem = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
          <div className={styles.avatar}></div>
          <div className={styles.typographyBlock}>
            <div className={styles.lineSmall}></div>
            <div className={styles.lineLong}></div>
          </div>
      </div>
    </div>
  );
};