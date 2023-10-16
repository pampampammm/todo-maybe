import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskEntity } from 'entities/Tasks';
import { ThunkExtraArg } from 'app/StoreProvider';
import { getTaskForm } from 'entities/Tasks/model/selector/getTaskForm/getTaskForm';

export const updateTaskData = createAsyncThunk<
    TaskEntity,
    void,
    { rejectValue: string, extra: ThunkExtraArg }>(
        'task/updateTask',
        async (_, thunkAPI) => {
            const { getState, extra, rejectWithValue } = thunkAPI;

            // @ts-ignore
            const data = getTaskForm(getState());
            const { id } = data;

            try {
                const response = await extra
                    .api
                    .put<TaskEntity>(`/tasks/${id}`, data);

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
