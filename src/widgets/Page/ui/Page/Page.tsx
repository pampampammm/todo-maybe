import React from 'react';

import { StyledProps } from 'shared/types/types';

import classNames from 'classnames';
import { PageHeader } from 'widgets/Page';
import styles from './Page.module.scss';

interface PageProps extends StyledProps{
    children?: React.ReactNode,
}

const Page = ({ className, children }: PageProps) => (
    <main className={classNames(styles.page, [className])}>
        {children && children}
    </main>
);

export default Page;
