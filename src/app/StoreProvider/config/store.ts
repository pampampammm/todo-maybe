import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export function createReduxStore() {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: false,
    });
}
