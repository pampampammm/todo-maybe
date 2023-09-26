import {TabItemType} from "shared/ui/Tabs/types/types";

import styles from './Tab.module.scss'
import classNames from "classnames";

interface TabProps {
    active?: boolean,
    value?: string,
    label?: string
    onClick?: (value: string) => void,
}

export const TabItem = (props: TabProps) => {
    const {
        active = false,
        value,
        onClick,
        label = "Tab"
    } = props

    const mods: Record<string, boolean> = {
        [styles.active]: active,
    };

    const onClickHandler = () => {
        if (onClick) {
            onClick(value);
        }
    };

    return (
        <button
            value={value}
            className={classNames(styles.btn, mods)}
            onClick={onClickHandler}
        >
            <span>{label}</span>
        </button>
    )
}