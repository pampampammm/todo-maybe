import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const getTaskTags = (state: StateSchema) => state.taskForm?.form?.tags || [];
