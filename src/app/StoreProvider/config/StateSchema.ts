import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUserName';
import { EnhancedStore } from '@reduxjs/toolkit';
import { AddTaskSchema } from 'features/addTaskInputField/';
import { AxiosInstance } from 'axios';
import { PageSchema } from 'pages';
import { TaskSchema } from 'features/editTaskForm/model/type/Task';
import { rtkAPI } from 'shared/api/RTKapi';
import { ReducerManager } from './reducerManager';

export interface StateSchema {
    user: UserSchema,
    taskForm: TaskSchema
    page: PageSchema
    [rtkAPI.reducerPath]: ReturnType<typeof rtkAPI.reducer>

    // async reducers, can be initialized in runtime component
    login?: LoginSchema,
    addTask?: AddTaskSchema,
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance
}
