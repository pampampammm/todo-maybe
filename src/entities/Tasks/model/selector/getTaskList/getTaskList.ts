import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const getTaskList = (state: StateSchema) => state.taskForm?.form?.list;
