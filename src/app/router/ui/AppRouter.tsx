import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import {routeConfig} from "../../../shared/config/routeConfig";
import {CircularProgress} from "@mui/material";
import OutletLayout from "app/router/ui/OutletLayout/OutletLayout";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<OutletLayout/>}>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<CircularProgress/>}>
                                {element}
                            </Suspense>
                        )}
                    />
                ))}
            </Route>
        </Routes>
    )
}

export default AppRouter;