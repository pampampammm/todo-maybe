import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskEntity } from 'entities/Tasks';
import { ThunkExtraArg } from 'app/StoreProvider';
import { getTask } from 'entities/Tasks/model/selector/getTask/getTask';

export const updateTaskData = createAsyncThunk<
    TaskEntity,
    void,
    { rejectValue: string, extra: ThunkExtraArg }>(
        'task/fetchTask',
        async (_, thunkAPI) => {
            const { getState, extra, rejectWithValue } = thunkAPI;

            // @ts-ignore
            const data = getTask(getState());
            const { id, subtasks } = data;

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
