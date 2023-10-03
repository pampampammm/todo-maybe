import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from 'app/StoreProvider/config/StateSchema';
import { userReducers } from 'entities/User';
import { loginReducer } from 'features/authByUserName';

export function createReduxStore() {
    return configureStore<StateSchema>({
        reducer: {
            user: userReducers,
            login: loginReducer,
        },
        devTools: false,
    });
}
