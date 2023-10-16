import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const getTask = (state: StateSchema) => state.taskForm?.form;
