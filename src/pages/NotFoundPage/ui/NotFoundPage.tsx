import React from 'react';

import { Page } from 'widgets/Page';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => (
    <Page className={styles.notFoundPage} headerText="Error">
        Page not found
    </Page>
);

export default NotFoundPage;
