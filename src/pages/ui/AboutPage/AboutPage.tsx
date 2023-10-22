import { useState } from 'react';

import { Page } from 'widgets/Page';

import styles from './AboutPage.module.scss';

const AboutPage = () => {
    const [currentTime] = useState(new Date('2022-04-18T20:14:42'));

    return (
        <Page className={styles.page} headerText="Components">
            {currentTime.getMonth()}
            -
            {currentTime.getUTCFullYear()}
            -
            {currentTime.getDate()}
        </Page>
    );
};

export default AboutPage;
