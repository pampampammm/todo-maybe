import React, { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import styles from './LoginModal.module.scss';

interface ModalProps {
    isOpen?: boolean,
    onSuccess?: () => void
}

const LoginModal = (props: ModalProps) => {
    const {
        isOpen,
        onSuccess,
    } = props;

    return (
        <Modal className={styles.modalWindow} isOpen={isOpen}>
            <Suspense>
                <LoginFormAsync onSuccess={onSuccess} />
            </Suspense>
        </Modal>
    );
};
export default LoginModal;
