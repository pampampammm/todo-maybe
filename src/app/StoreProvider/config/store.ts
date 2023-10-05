import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { userReducers } from 'entities/User';
import { loginReducer } from 'features/authByUserName';
import { tasksReducer } from 'entities/Tasks';

export function createReduxStore() {
    return configureStore<StateSchema>({
        reducer: {
            user: userReducers,
            login: loginReducer,
            task: tasksReducer,
        },
        devTools: true,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>();
