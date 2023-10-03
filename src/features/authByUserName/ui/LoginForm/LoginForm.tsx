import { Modal } from 'shared/ui/Modal/Modal';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import { ChangeEvent, FormEventHandler, useId } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/authByUserName';
import { selectLoginUsername } from '../../model/selectors/selectLoginState/selectLoginUsername';
import { selectLoginPassword } from '../../model/selectors/selectLoginState/selectLoginPassword';
import { selectLoginLoading } from '../../model/selectors/selectLoginState/selectLoginLoading';
import { selectLoginError } from '../../model/selectors/selectLoginState/selectLoginError';

import styles from './LoginForm.module.scss';

interface ModalProps {
    isOpen: boolean
    onSuccess?: () => void
}

export const LoginForm = ({ isOpen, onSuccess }: ModalProps) => {
    const userId = useId();
    const passwordId = useId();

    const username = useSelector(selectLoginUsername);
    const password = useSelector(selectLoginPassword);
    const isLoading = useSelector(selectLoginLoading);
    const error = useSelector(selectLoginError);

    const dispatch = useDispatch();

    const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUsername(e.target.value));
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value));
    };

    const handleFormLoginSubmit = () => {
        console.log('suck nigga dick');
        onSuccess();
    };

    return (
        <Modal isOpen={isOpen} className={styles.modalWindow}>
            <form onSubmit={handleFormLoginSubmit} className={styles.form}>
                <label htmlFor={userId}>User:</label>
                <Input
                    id={userId}
                    autoFocus
                    type="text"
                    placeholder="Type username...."
                    value={username && username}
                    onChange={handleUserChange}
                    theme={InputTheme.OUTLINE}
                />
                <label htmlFor={passwordId}>Password:</label>
                <Input
                    id={passwordId}
                    autoFocus
                    type="text"
                    placeholder="Type password...."
                    value={password}
                    onChange={handlePasswordChange}
                    theme={InputTheme.OUTLINE}
                />
                <Button className={styles.submit} type="submit">Submit</Button>
            </form>
        </Modal>
    );
};

export default LoginForm;
