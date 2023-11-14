import { TaskEntity } from 'entities/Tasks';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider';
import { PageSchema } from 'pages';
import { fetchTasks } from '../services/fetchTasks';

const pageAdapter = createEntityAdapter<TaskEntity>({
    selectId: (task) => task.id,
});

export const getTasks = pageAdapter.getSelectors<StateSchema>(
    (state) => state.page || pageAdapter.getInitialState(),
);

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: pageAdapter.getInitialState<PageSchema>({
        isLoading: false,
        error: false,
        editTaskId: undefined,
        ids: [],
        entities: {},
        editFormView: false,
        _inited: false,
    }),
    reducers: {
        setFormView: (state, action: PayloadAction<boolean>) => {
            state.editFormView = action.payload;
        },
        setTaskId: (state, action: PayloadAction<string>) => {
            state.editTaskId = action.payload;
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchTasks.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(fetchTasks.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.isLoading = false;
            pageAdapter.setAll(state, action.payload);
            state._inited = true;
        }),
});

export const { actions: pageActions } = tasksSlice;
export const { reducer: pageReducer } = tasksSlice;
