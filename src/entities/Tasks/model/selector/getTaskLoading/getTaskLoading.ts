import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const getTaskLoading = (state: StateSchema) => state.taskForm?.isLoading || false;
