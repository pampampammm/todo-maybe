import { createReduxStore } from 'app/StoreProvider/config/store';
import StoreProvider from './ui/StoreProvider';
import { AppDispatch, useAppDispatch } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    AppDispatch,
    useAppDispatch,
};
