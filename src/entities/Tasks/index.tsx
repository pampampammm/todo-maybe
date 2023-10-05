import TaskList from './ui/TaskList/TaskList';
import { tasksActions, tasksReducer } from './model/slice/tasksSlice';
import { TaskSchema, TaskEntity } from './model/type/Task';
import TaskEditForm from './ui/TaskEditFrom/TaskEditForm';

export {
    TaskList,
    tasksReducer,
    tasksActions,
    TaskSchema,
    TaskEntity,
    TaskEditForm,
};
