import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUserName';
import { TaskSchema } from 'entities/Tasks/model/type/Task';
import { EnhancedStore } from '@reduxjs/toolkit';
import { AddTaskSchema } from 'features/addTaskInputField/';
import { AxiosInstance } from 'axios';
import { MainPageSchema } from 'pages/MainPage';
import { ReducerManager } from './reducerManager';

export interface StateSchema {
    user: UserSchema,
    task: TaskSchema

    // async reducers, can be initialized in runtime component
    login?: LoginSchema,
    addTask?: AddTaskSchema,
    mainPage?: MainPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance
}
