import React, { useMemo, useState } from 'react';

import { useAppDispatch } from 'app/StoreProvider';
import { useSelector } from 'react-redux';
import { useTheme } from 'app/Providers/ThemeProvider';
import { selectAuthUserData, userActions } from 'entities/User';
import { selectLoginLoading } from 'features/authByUserName/model/selectors/selectLoginState/selectLoginLoading';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/authByUserName';

import styles from './Header.module.scss';

const TheHeader = () => {
    const { theme, toggleTheme } = useTheme();
    const [modal, setModal] = useState(false);

    const dispatch = useAppDispatch();
    const authData = useSelector(selectAuthUserData);
    const isLoading = useSelector(selectLoginLoading);

    const handleLogoutClick = () => {
        if (authData) dispatch(userActions.logout());
    };

    const onCloseModal = () => {
        setModal(false);
    };

    const onShowLoginModal = () => {
        setModal(true);
    };

    return (
        <header className={styles.header}>
            {authData ? (
                <Button
                    theme={ButtonTheme.OUTLINE_INVERTED}
                    disabled={isLoading}
                    onClick={handleLogoutClick}
                >
                    Logout
                </Button>
            ) : (
                <Button
                    theme={ButtonTheme.OUTLINE_INVERTED}
                    disabled={isLoading}
                    onClick={onShowLoginModal}
                >
                    Login
                </Button>
            )}
            {modal && (
                <LoginModal
                    isOpen={modal}
                    onSuccess={onCloseModal}
                />
            )}
            <Button onClick={() => toggleTheme()}>Toggle</Button>
        </header>
    );
};

export default TheHeader;
