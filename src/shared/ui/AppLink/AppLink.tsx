import {Link, LinkProps} from "react-router-dom";
import {FC, memo, ReactNode} from "react";

import classNames from "classnames";
import styles from './Applink.module.scss'

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}

const AppRouterLink: FC<AppLinkProps> = ({className, children,to, ...rest}) => {
    return (
        <Link
            className={classNames(styles.link, [className])}
            to={to}
        >
            {children}
        </Link>
    )
}
export const AppLink = memo(AppRouterLink)