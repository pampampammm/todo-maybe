import TaskList from './ui/TaskList/TaskList';
import { taskFormActions, taskFormReducer } from './model/slice/taskFormSlice';
import { TaskSchema, TaskEntity } from './model/type/Task';
import TaskEditForm from './ui/TaskEditFrom/TaskEditForm';

export {
    TaskList,
    taskFormReducer,
    taskFormActions,
    TaskSchema,
    TaskEntity,
    TaskEditForm,
};
