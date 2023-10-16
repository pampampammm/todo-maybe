import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { userReducers } from 'entities/User';
import { taskFormReducer } from 'entities/Tasks';
import { $api } from 'shared/api/api';
import { createReducerManager } from './reducerManager';

export function createReduxStore() {
    // only static reducers
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducers,
        taskForm: taskFormReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>();
