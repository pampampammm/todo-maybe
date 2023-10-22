import React, { Suspense, useEffect, useState } from 'react';

import { useTheme } from 'app/Providers/ThemeProvider';

import { AppBar } from 'widgets/AppBar';
import classNames from 'classnames';
import { Header } from 'widgets/Header';
import { useAppDispatch } from 'app/StoreProvider';
import { userActions } from 'entities/User';
import { MainLayout } from 'shared/layout/MainLayout/MainLayout';
import { AppRouter } from './app/router';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback="">
                <MainLayout
                    header={<Header />}
                    content={<AppRouter />}
                    sidebar={<AppBar />}
                />
            </Suspense>
        </div>
    );
};

export default App;
