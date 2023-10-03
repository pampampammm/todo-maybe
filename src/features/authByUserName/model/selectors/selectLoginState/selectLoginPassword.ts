import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectLoginPassword = (state: StateSchema) => state.login?.password;
