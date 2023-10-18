import { List, Tag } from 'shared/ui/TagsArray/types/Tag';

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
    id?: number;
    title?: string,
    completed?: boolean,
    description?: string,
    time?: {
        startDate: number,
        endDate?: number,
    },
    tags?: Tag[],
    list?: List,
    type?: TaskProcess,
    subtasks?: SubTask[]
}
