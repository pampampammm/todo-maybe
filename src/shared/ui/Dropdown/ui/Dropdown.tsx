import { useMemo, useRef, useState } from 'react';

import useOutsideClick from 'shared/lib/hooks/useOutsideClick';
import { Button } from 'shared/ui/Button/Button';
import { List } from 'entities/List';

import classNames from 'classnames';
import styles from './Dropdown.module.scss';

export enum DropDownTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
}

export enum DropdownSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export interface IPropsDropdownList {
    items: List[],
    defaultValue?: string
    className?: string
    onChange?: (value: List) => void
}

const Dropdown = (props: IPropsDropdownList) => {
    const {
        defaultValue = 'Change List...',
        className,
        items,
        onChange,
    } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const onClose = () => {
        setIsOpen((prevState) => !prevState);
    };

    useOutsideClick({
        elementRef: buttonRef,
        triggerRef: buttonRef,
        onOutsideClick: onClose,
        enabled: isOpen,
    });

    const onClickHandler = () => {
        setIsOpen((prevState) => !prevState);
    };

    const onItemClick = (value: List) => {
        if (onChange) {
            onChange(value);
        }
    };

    const renderItems = useMemo(() => (
        <ul className={styles.list}>
            {items && items.map((item) => (
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <li
                    key={item.id}
                    className={styles.listItem}
                    onClick={() => onItemClick(item)}
                >
                    {item?.label}
                </li>
            ))}
        </ul>
    ), [items]);

    return (
        <Button
            className={classNames(styles.dropdown, [className])}
            ref={buttonRef}
            onClick={() => onClickHandler()}
        >
            {defaultValue}
            {isOpen && renderItems}
        </Button>
    );
};

export default Dropdown;
