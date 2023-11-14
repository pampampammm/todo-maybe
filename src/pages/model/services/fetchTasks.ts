import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskEntity } from 'entities/Tasks';
import { ThunkExtraArg } from 'app/StoreProvider';

export const fetchTasks = createAsyncThunk<TaskEntity[], void,
    { rejectValue: string, extra: ThunkExtraArg }>(
        'task/fetchTaskByDate',
        async (_, { extra, rejectWithValue }) => {
            try {
                const response = await extra.api.get<TaskEntity[]>('/tasks');

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
