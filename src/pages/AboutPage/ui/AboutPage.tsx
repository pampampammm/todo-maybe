import {useMemo} from "react";


import {Page, PageHeader} from "widgets/Page";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

import styles from './AboutPage.module.scss'

const AboutPage = () => {
    const header = useMemo(() => <PageHeader text={"About"}/>, [])

    return (
        <Page header={header} className={styles.page}>
            About Page
            <Button theme={ButtonTheme.BACKGROUND}>ButtonTheme.BACKGROUND</Button>
            <Button theme={ButtonTheme.OUTLINE}>ButtonTheme.OUTLINE</Button>
            <Button theme={ButtonTheme.OUTLINE_INVERTED}>ButtonTheme.OUTLINE_INVERTED</Button>
            <Button theme={ButtonTheme.CLEAR}>ButtonTheme.CLEAR</Button>
            <Button theme={ButtonTheme.CLEAR_INVERTED}>ButtonTheme.CLEAR_INVERTED</Button>
        </Page>
    )
}

export default AboutPage;