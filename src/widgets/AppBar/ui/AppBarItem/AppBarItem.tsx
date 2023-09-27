import React, {FC} from "react";


import styles from "./AppBarItem.module.scss"
import {AppLink} from "shared/ui/AppLink/AppLink";
import classNames from "classnames";
import {StyledProps} from "shared/types/types";
import {useLocation} from "react-router-dom";
import {common} from "@mui/material/colors";

// import {AppBarItemType} from "entities/AppBar/model/AppBarItems";

interface ItemProps extends StyledProps {
    item: {
        path: string;
        text: string;
        // Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    }
}

export const AppBarItem: FC<ItemProps> = ({item, className, active}) => {
    const {pathname} = useLocation()

// TODO: 'рефактор иконки'
    return (
        <AppLink
            to={item.path}
            className={classNames(styles.link,
                {[styles.active]: pathname === item.path},
                [className])}
        >
            {/*<item.Icon className={styles.icon}/>*/}
            <span className={styles.text}>
                {item.text}
            </span>
            <div className={styles.notification}>
                {5}
            </div>
        </AppLink>
    )
}



