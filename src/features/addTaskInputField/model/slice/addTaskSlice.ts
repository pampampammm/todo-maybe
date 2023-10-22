import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addTaskFromField } from 'features/addTaskInputField/model/services/addTaskFromField';
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
    extraReducers: (builder) => {
        builder
            .addCase(addTaskFromField.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addTaskFromField.rejected, (state) => {
                state.error = true;
                state.isLoading = false;
            })
            .addCase(addTaskFromField.fulfilled, (state) => {
                state.error = false;
                state.isLoading = false;
            });
    },
});

export const { actions: addTaskActions } = addTaskSlice;
export const { reducer: addTaskReducer } = addTaskSlice;
