import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userSlice } from 'entities/User/model/slice/userSlice';
import { LoginSchema } from '../type/types';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
