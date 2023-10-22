import { List } from 'entities/List';
import { Tag } from 'entities/Tags';

export enum TaskProcess {
    TASK_COMPLETED = 'complete',
    TASK_PROCESSED = 'process',
    TASK_READY = 'ready'
}

export interface SubTask {
    id: number
    title: string,
    complete?: boolean
}

export interface TaskEntity {
    id?: string;
    title?: string,
    completed?: boolean,
    description?: string,
    time?: {
        startDate: string,
        endDate?: string,
    },
    tags?: Tag[],
    list?: List,
    type?: TaskProcess,
    subtasks?: SubTask[]
}
