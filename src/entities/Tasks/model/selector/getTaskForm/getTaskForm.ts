import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const getTaskForm = (state: StateSchema) => state.taskForm?.form;
