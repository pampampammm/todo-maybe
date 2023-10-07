import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectAddTaskText = (state: StateSchema) => state.addTask?.text || '';
