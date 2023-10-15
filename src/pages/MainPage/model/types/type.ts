import { EntityState } from '@reduxjs/toolkit';
import { TaskEntity } from 'entities/Tasks';

export interface MainPageSchema extends EntityState<TaskEntity>{
    error?: boolean,
    isLoading?: boolean
    editFormView: boolean
    editTaskId?: number
}
