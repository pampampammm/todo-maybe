import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const getTaskError = (state: StateSchema) => state.taskForm?.error || false;
