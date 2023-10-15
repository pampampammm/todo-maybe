import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions, UserEntity } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkExtraArg } from 'app/StoreProvider';

interface LoginParams {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<UserEntity,
    LoginParams,
    { rejectValue: string, extra: ThunkExtraArg }>(
        'login/loginByUsername',
        async (authData, { extra, dispatch, rejectWithValue }) => {
            try {
                const response = await extra.api.post<UserEntity>('/login', authData);
                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
