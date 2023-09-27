import React, {ReactNode} from "react";

import {StyledProps} from "shared/types/types";

import styles from "./Page.module.scss"
import classNames from "classnames";

interface PageProps extends StyledProps{
    children: React.ReactNode
    header?: React.ReactNode
}

const Page = ({className, children, header}: PageProps) => {
    return (
        <main className={classNames(styles.page, [className])}>
            {header && header}
            {children}
        </main>
    )
}

export default Page;