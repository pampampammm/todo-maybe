import { useRef, useState } from 'react';

import { Button } from 'shared/ui/Button/Button';
import useOutsideClick from 'shared/lib/hooks/useOutsideClick';
import { List } from 'shared/ui/TagsArray/types/Tag';

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
    label: string
    items: List[],
    className?: string
        onChange?: (value: List) => void
}

const Dropdown = (props: IPropsDropdownList) => {
    const {
        label,
        className,
        items,
        onChange,
    } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    function onClose() {
        setIsOpen((prevState) => !prevState);
    }

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
        onChange(value);
    };

    return (
        <Button
            className={classNames(styles.dropdown, [className])}
            ref={buttonRef}
            onClick={() => onClickHandler()}
        >
            {label}
            {isOpen
                && (
                    <ul className={styles.list}>
                        {items?.map((item) => (
                            <li
                                key={item.id}
                                className={styles.listItem}
                                onClick={() => onItemClick(item)}
                            >
                                {item.value}
                            </li>
                        ))}
                    </ul>
                )}
        </Button>
    );
};

export default Dropdown;
