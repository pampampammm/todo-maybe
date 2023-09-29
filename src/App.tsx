import React, { Suspense, useState } from 'react';

import { useTheme } from 'app/Providers/ThemeProvider';

import { AppBar } from 'widgets/AppBar';
import classNames from 'classnames';
import { AppRouter } from './app/router';

const App = () => {
    const { theme } = useTheme();
    const [details, setDetails] = useState<boolean>(true);

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback="">
                {/* <Header/> */}
                <div className="content-page">
                    <AppBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
