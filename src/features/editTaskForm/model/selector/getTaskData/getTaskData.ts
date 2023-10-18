import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const getTaskData = (state: StateSchema) => state.taskForm?.data;
