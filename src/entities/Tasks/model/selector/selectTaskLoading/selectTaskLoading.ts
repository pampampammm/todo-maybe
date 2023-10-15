import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectTaskLoading = (state: StateSchema) => state.task.isLoading;
