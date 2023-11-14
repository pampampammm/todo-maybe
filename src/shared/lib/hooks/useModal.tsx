import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';

interface ModalProps {
    onClose: () => void,
    isOpen: boolean,
    lazy?: boolean,
    animationDelay?: number
}

export const useModal = (props: ModalProps) => {
    const { onClose, isOpen } = props;

    const [isMounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            setMounted(false);
        };
    }, [isOpen, onKeyDown]);

    return {
        closeHandler,
        isMounted,
    };
};
