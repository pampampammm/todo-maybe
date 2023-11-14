import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskEntity } from 'entities/Tasks';
import { ThunkExtraArg } from 'app/StoreProvider';
import { getAddTaskField } from 'features/addTaskInputField/model/selector/getAddTaskField/getAddTaskField';
import { getUserData } from 'entities/User';
import { fetchTasks } from 'pages/model/services/fetchTasks';
import { TaskFormattedTime } from 'entities/Tasks/model/type/Task';
import { getFormattedDate, getParsedDate } from 'shared/lib/helpers/getFormattedDate';

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

        const date = getFormattedDate(new Date());

        const taskTime: TaskFormattedTime = {
            start: {
                time: date.time,
                date: date.date,
            },
        };

        const newTask: TaskEntity = {
            id: Date.now().toString(),
            title: textField,
            time: taskTime,
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
