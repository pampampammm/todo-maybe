import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddTaskSchema } from '../types/types';

const initialState: AddTaskSchema = {
    text: '',
};

export const addTaskSlice = createSlice({
    name: 'addTask',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addTaskActions } = addTaskSlice;
export const { reducer: addTaskReducer } = addTaskSlice;
