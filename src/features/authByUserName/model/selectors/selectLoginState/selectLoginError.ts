import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectLoginError = (state: StateSchema) => state.login?.error;
