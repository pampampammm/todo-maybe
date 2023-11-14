import {
    ChangeEvent, memo, useCallback, useEffect, useId,
} from 'react';
import { useSelector } from 'react-redux';

import Input, { InputTheme } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { loginActions } from 'features/authByUserName';
import { useAppDispatch } from 'app/StoreProvider';
import { loginReducer } from 'features/authByUserName/model/slice/loginSlice';
import DynamicStoreReducerWrapper from 'shared/components/DynamicStoreReducerWrapper/DynamicStoreReducerWrapper';
import useToggle from 'shared/lib/hooks/useToggle';
import { loginByUsername } from '../../model/services/loginByUsername';
import { selectLoginUsername } from '../../model/selectors/selectLoginState/selectLoginUsername';
import { selectLoginPassword } from '../../model/selectors/selectLoginState/selectLoginPassword';
import { selectLoginLoading } from '../../model/selectors/selectLoginState/selectLoginLoading';

import styles from './LoginForm.module.scss';

export interface LoginFormProps {
    onSuccess?: () => void
}

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const username = useSelector(selectLoginUsername);
    const password = useSelector(selectLoginPassword);
    const isLoading = useSelector(selectLoginLoading);

    const userId = useId();
    const passwordId = useId();

    const handleUserChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUsername(e.target.value));
    }, [dispatch]);

    const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value));
    }, [dispatch]);

    const handleFormLoginSubmit = useCallback(async () => {
        const loginResult = await dispatch(loginByUsername({ username, password }));
        if (loginResult.meta.requestStatus === 'fulfilled') { onSuccess(); }
    }, [dispatch, password, username]);

    return (
        <DynamicStoreReducerWrapper reducerKey="login" reducer={loginReducer}>
            <div className={styles.form}>
                <label htmlFor={userId}>User:</label>
                <Input
                    id={userId}
                    autoFocus
                    type="text"
                    placeholder="Type username...."
                    value={username}
                    onChange={handleUserChange}
                    theme={InputTheme.OUTLINE}
                />
                <label htmlFor={passwordId}>Password:</label>
                <Input
                    id={passwordId}
                    type="password"
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
        </DynamicStoreReducerWrapper>
    );
});

export default LoginForm;
