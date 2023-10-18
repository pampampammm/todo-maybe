import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const getAddTaskField = (state: StateSchema) => state.addTask?.text || '';
