import { TaskEntity, TaskSchema } from 'entities/Tasks';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider';
import { MainPageSchema } from 'pages/MainPage';
import { fetchTaskData } from 'entities/Tasks/model/services/fetchTaskData';
import { fetchTaskByDate } from 'pages/MainPage/model/services/fetchTasksByDate';

const mainPageAdapter = createEntityAdapter<TaskEntity>({
    selectId: (task) => task.id,
});

export const getTasks = mainPageAdapter.getSelectors<StateSchema>(
    (state) => state.mainPage || mainPageAdapter.getInitialState(),
);

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: mainPageAdapter.getInitialState<MainPageSchema>({
        isLoading: false,
        error: false,
        editTaskId: undefined,
        ids: [],
        entities: {},
        editFormView: false,
    }),
    reducers: {
        setFormView: (state, action: PayloadAction<boolean>) => {
            state.editFormView = action.payload;
        },
        setTaskId: (state, action: PayloadAction<number>) => {
            state.editTaskId = action.payload;
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchTaskByDate.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(fetchTaskByDate.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
        .addCase(fetchTaskByDate.fulfilled, (state, action) => {
            state.isLoading = false;
            mainPageAdapter.setAll(state, action.payload);
        }),
});

export const { actions: mainPageActions } = tasksSlice;
export const { reducer: mainPageReducer } = tasksSlice;
