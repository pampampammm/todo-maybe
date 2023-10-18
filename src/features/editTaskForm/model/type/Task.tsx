import { TaskEntity } from 'entities/Tasks';

export interface TaskSchema {
    data?: TaskEntity
    form?: TaskEntity,
    isLoading: boolean,
    error?:boolean | string
}
