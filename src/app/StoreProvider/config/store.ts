import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { userReducers } from 'entities/User';
import { $api } from 'shared/api/api';
import { taskFormReducer } from 'features/editTaskForm/model/slice/taskFormSlice';
import { rtkAPI } from 'shared/api/RTKapi';
import { pageReducer } from 'pages/model/slice/pageSlice';
import { calendarPageReducer } from 'pages/ui/CalendarPage';
import { createReducerManager } from './reducerManager';

export function createReduxStore() {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducers,
        taskForm: taskFormReducer,
        page: pageReducer,
        calendarPage: calendarPageReducer,
        [rtkAPI.reducerPath]: rtkAPI.reducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }).concat(rtkAPI.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>();
