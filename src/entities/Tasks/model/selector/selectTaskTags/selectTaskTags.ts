import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectTaskTags = (state: StateSchema) => state.task?.task?.tags || [];
