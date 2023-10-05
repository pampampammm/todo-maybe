import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SubTask, TaskEntity, TaskSchema } from '../type/Task';

const initialState: TaskSchema = {
    task: undefined,
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTask: (
            state,
            action: PayloadAction<TaskEntity>,
        ) => {
            state.task = action.payload;
        },
        editTaskTitle: (
            state,
            action: PayloadAction<string>,
        ) => {
            state.task.title = action.payload;
        },
        editTaskDescription: (
            state,
            action: PayloadAction<string>,
        ) => {
            state.task.description = action.payload;
        },
        addTaskTags: (
            state,
            action: PayloadAction<string>,
        ) => {
            state.task.tags = [...state.task.tags, action.payload];
        },
        setTaskComplete: (
            state,
            action: PayloadAction<boolean>,
        ) => {
            state.task.completed = action.payload;
        },
        addSubtask: (state, action: PayloadAction<SubTask>) => {
            state.task.subtasks = [...state.task.subtasks, action.payload];
        },
        removeTask: (state) => {
            state.task = undefined;
        },
    },
});

export const { actions: tasksActions } = tasksSlice;
export const { reducer: tasksReducer } = tasksSlice;