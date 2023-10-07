import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectTaskSubTasks = (state: StateSchema) => state.task?.task?.subtasks;
