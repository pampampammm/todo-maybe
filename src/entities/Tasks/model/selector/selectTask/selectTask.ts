import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectTask = (state: StateSchema) => state.task?.task;
