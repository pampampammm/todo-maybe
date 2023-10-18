import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskEntity } from 'entities/Tasks';
import { ThunkExtraArg } from 'app/StoreProvider';
import { getAddTaskField } from 'features/addTaskInputField/model/selector/getAddTaskField/getAddTaskField';
import { getUserData } from 'entities/User';

export const addTaskFromField = createAsyncThunk<
    TaskEntity,
    {text: string},
    {rejectValue: string, extra: ThunkExtraArg}
>(
    'articleDetails/addCommentForArticle',
    async ({ text }, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi;

        // @ts-ignore
        const textField = getAddTaskField(getState());
        // @ts-ignore
        const userData = getUserData(getState());

        if (!userData || !text) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<TaskEntity>('/tasks', {

            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
