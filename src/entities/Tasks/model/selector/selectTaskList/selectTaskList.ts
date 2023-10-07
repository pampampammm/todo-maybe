import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectTaskList = (state: StateSchema) => state.task?.task?.list;
