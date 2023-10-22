import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskEntity } from 'entities/Tasks';
import { ThunkExtraArg } from 'app/StoreProvider';
import { getAddTaskField } from 'features/addTaskInputField/model/selector/getAddTaskField/getAddTaskField';
import { getUserData } from 'entities/User';
import { fetchTasks } from 'pages/model/services/fetchTasksByDate';
import { DATE_TYPE, getFormatDate } from 'shared/lib/helpers/getFormatDate';

export const addTaskFromField = createAsyncThunk<
    TaskEntity,
    void,
    {rejectValue: string, extra: ThunkExtraArg}
>(
    'articleDetails/addCommentForArticle',
    async (_, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi;

        // @ts-ignore

        const textField = getAddTaskField(getState());
        // @ts-ignore
        const userData = getUserData(getState());
        if (!userData || !textField) {
            return rejectWithValue('no data');
        }

        const startDate = getFormatDate(new Date(), DATE_TYPE.FULL);

        const newTask: TaskEntity = {
            id: Date.now().toString(),
            title: textField,
            time: {
                startDate,
            },
        };

        try {
            const response = await extra.api.post<TaskEntity>('/tasks', newTask);

            dispatch(fetchTasks());

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
