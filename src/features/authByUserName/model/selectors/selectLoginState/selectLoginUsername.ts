import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectLoginUsername = (state: StateSchema) => state.login?.username || '';
