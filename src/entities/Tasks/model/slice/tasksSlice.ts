import { createSlice } from '@reduxjs/toolkit';
import { TaskSchema } from 'entities/Tasks/model/type/Task';
import { tempTasks } from 'shared/temp/temp_tasks';

const initialState: TaskSchema[] = tempTasks;

// interface TasksSlice {
//     tasks: TaskSchema[]
// }
//
// export const tasksSlice = createSlice({
//     name: 'tasks',
//     initialState,
//
// });
