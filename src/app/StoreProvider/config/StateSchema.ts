import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUserName';
import { TaskSchema } from 'entities/Tasks/model/type/Task';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ReducerManager } from './reducerManager';

export interface StateSchema {
    user: UserSchema,
    task: TaskSchema

    // async reducers, can be initialized in runtime component
    login?: LoginSchema,
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
