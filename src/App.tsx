import React, {Suspense} from "react";

import {useTheme} from "app/Providers/ThemeProvider";
import {AppRouter} from "./app/router";
import {Header} from "./widgets/Header";
import {AppBar} from "./entities/AppBar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback=''>
            {/*<Header/>*/}
            <div className={"content-page"}>
                <AppBar/>
                <AppRouter/>
            </div>
            </Suspense>
        </div>
    );
};


export default App;
