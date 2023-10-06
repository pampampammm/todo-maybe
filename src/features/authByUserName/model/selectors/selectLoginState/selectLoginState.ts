import { StateSchema } from 'app/StoreProvider';

export const selectLoginState = (state: StateSchema) => state?.login;
