import React from "react";

import styles from "./Page.module.scss"
import classNames from "classnames";

interface PageProps {
    classname?: string,
    children: React.ReactNode
}

const Page = ({classname, children}: PageProps) => {
    return (
        <main className={classNames(styles.pageSection, [classname])}>
            {children}
        </main>
    )
}

export default Page;