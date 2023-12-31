import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskEntity } from 'entities/Tasks';
import { ThunkExtraArg } from 'app/StoreProvider';
import { fetchTasks } from 'pages/model/services/fetchTasks';
import { getTaskForm } from '../selector/getTaskForm/getTaskForm';

export const updateTaskData = createAsyncThunk<
    TaskEntity,
    void,
    { rejectValue: string, extra: ThunkExtraArg }>(
        'task/updateTask',
        async (_, thunkAPI) => {
            const {
                getState, extra, rejectWithValue, dispatch,
            } = thunkAPI;

            // @ts-ignore
            const data = getTaskForm(getState());
            const { id } = data;

            try {
                const response = await extra
                    .api
                    .put<TaskEntity>(`/tasks/${id}`, data);
                dispatch(fetchTasks());

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
