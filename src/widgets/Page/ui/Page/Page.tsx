import React from 'react';

import { StyledProps } from 'shared/types/types';

import classNames from 'classnames';
import { PageHeader } from 'widgets/Page';
import styles from './Page.module.scss';

interface PageProps extends StyledProps{
    children: React.ReactNode,
    headerText?: string
}

const Page = ({ className, children, headerText }: PageProps) => (
    <main className={classNames(styles.page, [className])}>
        <PageHeader text={headerText} />
        {children}
    </main>
);

export default Page;
