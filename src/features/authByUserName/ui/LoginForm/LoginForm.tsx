import {
    ChangeEvent, useCallback, useId,
} from 'react';
import { useSelector } from 'react-redux';

import Input, { InputTheme } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { loginActions } from 'features/authByUserName';
import { useAppDispatch } from 'app/StoreProvider';
import { loginByUsername } from '../../model/services/loginByUsername';
import { selectLoginUsername } from '../../model/selectors/selectLoginState/selectLoginUsername';
import { selectLoginPassword } from '../../model/selectors/selectLoginState/selectLoginPassword';
import { selectLoginLoading } from '../../model/selectors/selectLoginState/selectLoginLoading';
import { selectLoginError } from '../../model/selectors/selectLoginState/selectLoginError';

import styles from './LoginForm.module.scss';

interface ModalProps {
    onSuccess?: () => void
}

const LoginForm = ({ onSuccess }: ModalProps) => {
    const userId = useId();
    const passwordId = useId();

    const username = useSelector(selectLoginUsername);
    const password = useSelector(selectLoginPassword);
    const isLoading = useSelector(selectLoginLoading);
    const error = useSelector(selectLoginError);

    const dispatch = useAppDispatch();

    const handleUserChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUsername(e.target.value));
    }, [dispatch]);

    const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value));
    }, [dispatch]);

    const handleFormLoginSubmit = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
        onSuccess();
    }, [dispatch, password, username]);

    return (
        <div className={styles.form}>
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
                type="text"
                placeholder="Type password...."
                value={password}
                onChange={handlePasswordChange}
                theme={InputTheme.OUTLINE}
            />
            <Button
                disabled={isLoading}
                className={styles.submit}
                type="submit"
                onClick={handleFormLoginSubmit}
            >
                Submit
            </Button>
        </div>
    );
};

export default LoginForm;
