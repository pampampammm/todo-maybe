import React, { useState } from 'react';

import { TabItem } from 'shared/ui/Tabs/ui/TabItem/TabItem';
import { TabProps } from 'shared/ui/Tabs/ui/Tab/Tab';

import classNames from 'classnames';
import styles from './Tabs.module.scss';

interface TabsProps {
    onChange?: (value: string) => void,
    defaultValue?: string,
    className?: string,
    children?: React.ReactElement<TabProps>[];
}

const Tabs = (props: TabsProps) => {
    const {
        onChange,
        defaultValue,
        children,
        className,
    } = props;

    const handleTabClick = (value: string) => {
        if (onChange) {
            onChange(value);
        }
    };

    const itemsToRender = () => children.map((item) => {
        const { value, label } = item.props;

        return (
            <TabItem
                value={value}
                label={label}
                active={defaultValue === value}
                key={value}
                onClick={handleTabClick}
            />
        );
    });

    // eslint-disable-next-line consistent-return
    const renderComponent = () => {
        if (children) {
            return children
                .find((item) => item.props.value === defaultValue);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.tabsList}>
                {itemsToRender()}
            </div>
            <div className={classNames(styles.tabContent, [className])}>
                {renderComponent()}
            </div>
        </div>
    );
};

export default Tabs;
