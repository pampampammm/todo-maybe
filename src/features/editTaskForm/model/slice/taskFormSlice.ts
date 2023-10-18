import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskEntity } from 'entities/Tasks';
import { fetchTaskData } from '../services/fetchTaskData';
import { updateTaskData } from '../services/udpateTaskData';
import { TaskSchema } from '../type/Task';

const initialState: TaskSchema = {
    isLoading: true,
    error: false,
};

export const taskFormSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        updateTask: (state, action: PayloadAction<TaskEntity>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        cancelTask: (state) => {
            state.form = state.data;
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchTaskData.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchTaskData.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
        .addCase(fetchTaskData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
        })
        .addCase(updateTaskData.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateTaskData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(updateTaskData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.data = action.payload;
            state.form = action.payload;
        }),
});

export const { actions: taskFormActions } = taskFormSlice;
export const { reducer: taskFormReducer } = taskFormSlice;
