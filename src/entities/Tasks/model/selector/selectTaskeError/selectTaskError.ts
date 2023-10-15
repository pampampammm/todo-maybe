import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectTaskError = (state: StateSchema) => state.task?.error || false;
