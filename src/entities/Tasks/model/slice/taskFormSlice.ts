import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tag } from 'shared/ui/TagsArray';
import { List } from 'shared/ui/TagsArray/types/Tag';
import { fetchTaskData } from '../services/fetchTaskData';
import { updateTaskData } from '../services/udpateTaskData';
import { SubTask, TaskEntity, TaskSchema } from '../type/Task';

const initialState: TaskSchema = {
    isLoading: true,
    error: false,
};

export const taskFormSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTask: (state, action: PayloadAction<TaskEntity>) => {
            state.form = action.payload;
        },
        editTaskTitle: (state, action: PayloadAction<string>) => {
            state.form.title = action.payload;
        },
        editTaskDescription: (state, action: PayloadAction<string>) => {
            state.form.description = action.payload;
        },
        setTaskTags: (state, action: PayloadAction<Tag>) => {
            state.form.tags = [...state.form.tags, action.payload];
        },
        setTaskList: (state, action: PayloadAction<List>) => {
            state.form.list = action.payload;
        },
        setTaskComplete: (state, action: PayloadAction<boolean>) => {
            state.form.completed = action.payload;
        },
        addSubtask: (state, action: PayloadAction<SubTask>) => {
            state.form.subtasks = [...state.form.subtasks, action.payload];
        },
        removeTask: (state) => {
            state.form = undefined;
        },
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
