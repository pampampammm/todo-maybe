import React, { forwardRef, ReactNode, useRef } from 'react';
import { useModal } from 'shared/lib/hooks/useModal';
import classNames from 'classnames';

import cls from 'shared/ui/Modal/Modal.module.scss';
import useOutsideClick from 'shared/lib/hooks/useOutsideClick';
import styles from './Popup.module.scss';

interface PopupProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    onOutsideClick?: () => void
}

const Popup = (props: PopupProps) => {
    const {
        isOpen, onClose, className, children, onOutsideClick,
    } = props;

    const { isMounted } = useModal({ isOpen, onClose });
    const elementRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = () => {
        if (onOutsideClick) {
            onOutsideClick();
        }
    };

    useOutsideClick({
        elementRef,
        triggerRef: elementRef,
        onOutsideClick: handleOutsideClick,
    });

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    if (!isMounted) {
        return null;
    }

    return (
        <div ref={elementRef} className={classNames(styles.Popup, mods, [className])}>
            <div className={styles.overlay}>
                {children}
            </div>
        </div>
    );
};

export default Popup;
