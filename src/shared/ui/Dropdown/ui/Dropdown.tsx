import { useEffect, useRef, useState } from 'react';

import { Button } from 'shared/ui/Button/Button';
import useOutsideClick from 'shared/lib/hooks/useOutsideClick';
import { IList } from '../types/types';

import styles from './Dropdown.module.css';

export interface IPropsDropdownList {
    items: IList,
    className?: string
}

const Dropdown = ({ items, className }: IPropsDropdownList) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useOutsideClick({
        elementRef: buttonRef,
        triggerRef: buttonRef,
        onOutsideClick: onClose,
        enabled: isOpen,
    });

    function onClose() {
        console.log('outside click');
        setIsOpen((prevState) => !prevState);
    }

    const onClickHandler = () => {
        setIsOpen((prevState) => !prevState);
    };

    const onItemClick = () => {
        console.log('dropdown item selected');
    };

    return (
        <Button
            className={styles.dropdown}
            ref={buttonRef}
            onClick={() => onClickHandler()}
        >
            {items.title}
            {isOpen
                && (
                    <ul className={styles.list}>
                        {items.list.map((item) => (
                            <li
                                key={item.id}
                                className={styles.listItem}
                                onClick={onItemClick}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                )}
        </Button>
    );
};

export default Dropdown;
