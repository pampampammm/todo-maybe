import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const getTaskTime = (state: StateSchema) => state.taskForm.form?.time;
