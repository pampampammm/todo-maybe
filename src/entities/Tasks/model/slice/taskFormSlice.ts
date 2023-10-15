import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { List, Tag } from 'shared/ui/TagsArray/types/Tag';
import { fetchTask } from 'entities/Tasks/model/services/fetchTask';
import { SubTask, TaskEntity, TaskSchema } from '../type/Task';

const initialState: TaskSchema = {
    task: undefined,
    isLoading: true,
    error: false,
};

export const taskFormSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTask: (state, action: PayloadAction<TaskEntity>) => {
            state.task = action.payload;
        },
        editTaskTitle: (state, action: PayloadAction<string>) => {
            state.task.title = action.payload;
        },
        editTaskDescription: (state, action: PayloadAction<string>) => {
            state.task.description = action.payload;
        },
        setTaskTags: (state, action: PayloadAction<Tag>) => {
            state.task.tags = [...state.task.tags, action.payload];
        },
        setTaskList: (state, action: PayloadAction<List>) => {
            state.task.list = action.payload;
        },
        setTaskComplete: (state, action: PayloadAction<boolean>) => {
            state.task.completed = action.payload;
        },
        addSubtask: (state, action: PayloadAction<SubTask>) => {
            state.task.subtasks = [...state.task.subtasks, action.payload];
        },
        removeTask: (state) => {
            state.task = undefined;
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchTask.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchTask.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
        .addCase(fetchTask.fulfilled, (state) => {
            state.isLoading = false;
        }),
});

export const { actions: tasksActions } = taskFormSlice;
export const { reducer: tasksReducer } = taskFormSlice;
