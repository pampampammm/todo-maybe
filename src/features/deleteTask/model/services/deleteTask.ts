import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { TaskEntity } from 'entities/Tasks';
import { fetchTasks } from 'pages/model/services/fetchTasks';

interface DeleteTaskProps {
    id: string
}

export const deleteTask = createAsyncThunk<TaskEntity,
    DeleteTaskProps,
    { rejectValue: string, extra: ThunkExtraArg }>(
        'login/loginByUsername',
        async (props, thunkAPI) => {
            const { extra, dispatch, rejectWithValue } = thunkAPI;
            const { id } = props;

            try {
                const response = await extra.api.delete<TaskEntity>(`/tasks/${id}`);
                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchTasks());

                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
