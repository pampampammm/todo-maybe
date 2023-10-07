import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectTaskDescription = (state: StateSchema) => state.task?.task?.description;
