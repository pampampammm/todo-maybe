import React, {useState} from "react";

import {TabItem} from "shared/ui/Tabs/ui/TabItem/TabItem";
import {TabProps} from "shared/ui/Tabs/ui/Tab/Tab";

import styles from './Tabs.module.scss'
import classNames from "classnames";

interface TabsProps {
    onChange: (value: string) => void,
    defaultValue?: string,
    className?: string,
    children?: React.ReactElement<TabProps>[];
}


export const Tabs = (props: TabsProps) => {
    const {
        onChange,
        defaultValue,
        children,
        className
    } = props

    const [activeTab, setActiveTab] = useState<string>(defaultValue)

    const handleTabClick = (value: string) => {
        console.log(value)
        setActiveTab(value)
        onChange(value)
    };

    const itemsToRender = () => {
        return children.map((item) => {
            const props = item.props

            return <TabItem value={props.value}
                            label={props.label}
                            active={activeTab === props.value}
                            key={props.value}
                            onClick={handleTabClick}
            />
        })
    }

    const renderComponent = () => {
        if (children)
            return children.find((item) => item.props.value === activeTab)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.tabsList}>
                {itemsToRender()}
            </div>
            <div className={classNames(styles.tabContent, [className])}>
                {renderComponent()}
            </div>
        </div>
    )
}