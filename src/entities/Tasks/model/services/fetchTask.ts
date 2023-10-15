import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/StoreProvider';
import { TaskEntity } from 'entities/Tasks';

interface TaskParams {
    id: number,
}

export const fetchTask = createAsyncThunk<TaskEntity,
    TaskParams,
    { rejectValue: string, extra: ThunkExtraArg }>(
        'task/fetchTask',
        async ({ id }, { extra, rejectWithValue }) => {
            try {
                const response = await extra.api.get<TaskEntity>('/tasks');

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
