import React, {
    MouseEvent,
    ReactNode, TouchEvent, useCallback, useEffect, useRef, useState,
} from 'react';

import classNames from 'classnames';
import ReactPortal from 'shared/ui/ReactPortal/ReactPortal';
import { useModal } from 'shared/lib/hooks/useModal';
import useOutsideClick from 'shared/lib/hooks/useOutsideClick';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    onOutsideClick?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        onOutsideClick,
        lazy,
    } = props;

    const elementRef = useRef<HTMLDivElement>();
    const { isMounted } = useModal({ isOpen, onClose });

    useOutsideClick({
        elementRef,
        triggerRef: elementRef,
        onOutsideClick,
    });

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    if (!isMounted) {
        return null;
    }

    return (
        <ReactPortal>
            <div ref={elementRef} className={classNames(cls.Modal, mods, [className, 'app_modal'])}>
                <div className={cls.overlay}>
                    <div className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </ReactPortal>
    );
};
