import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { userReducers } from 'entities/User';
import { tasksReducer } from 'entities/Tasks';
import { createReducerManager } from './reducerManager';

export function createReduxStore() {
    // only static reducers
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducers,
        task: tasksReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: true,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>();
