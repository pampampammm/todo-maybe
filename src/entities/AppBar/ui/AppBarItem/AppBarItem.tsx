import React, {FC} from "react";


import styles from "./AppBarItem.module.scss"
import {AppLink} from "shared/ui/AppLink/AppLink";
// import {AppBarItemType} from "entities/AppBar/model/AppBarItems";

interface ItemProps {
    item: {
        path: string;
        text: string;
        // Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    }
}

export const AppBarItem: FC<ItemProps> = ({item}) => {

// TODO: 'рефактор иконки'
    return (
        <AppLink
            to={item.path}
            className={styles.linkWrapper}
        >
            {/*<item.Icon className={styles.icon}/>*/}
            <span className={styles.text}>
                {item.text}
            </span>
        </AppLink>
    )
}



