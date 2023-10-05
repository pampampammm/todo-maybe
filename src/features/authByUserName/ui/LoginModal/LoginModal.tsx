import React from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import LoginForm from 'features/authByUserName/ui/LoginForm/LoginForm';

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
            <LoginForm onSuccess={onSuccess} />
        </Modal>
    );
};
export default LoginModal;
