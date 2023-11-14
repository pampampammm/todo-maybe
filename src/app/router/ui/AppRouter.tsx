import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import OutletLayout from 'app/router/ui/OutletLayout/OutletLayout';
import { routeConfig } from '../../../shared/config/routeConfig';

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<OutletLayout />}>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<> </>}>
                            {element}
                        </Suspense>
                    )}
                />
            ))}
        </Route>
    </Routes>
);

export default AppRouter;
