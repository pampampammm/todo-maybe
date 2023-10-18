import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const getTaskDescription = (state: StateSchema) => state.taskForm.form?.description || '';
