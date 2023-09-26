import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import {routeConfig} from "../../../shared/config/routeConfig";
import {CircularProgress} from "@mui/material";


const AppRouter = () => {
    return (
        <Suspense>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<CircularProgress />}>
                                {element}
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter;