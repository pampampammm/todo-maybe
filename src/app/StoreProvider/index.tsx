import { createReduxStore } from 'app/StoreProvider/config/store';
import StoreProvider from './ui/StoreProvider';
import { AppDispatch, useAppDispatch } from './config/store';
import { StateSchema } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    AppDispatch,
    useAppDispatch,
    StateSchema,
};
