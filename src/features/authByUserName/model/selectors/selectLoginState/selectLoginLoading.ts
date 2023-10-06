import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectLoginLoading = (state: StateSchema) => state.login?.isLoading;
