export enum TaskProcess {
    TASK_COMPLETED = 'complete',
    TASK_PROCESSED = 'process',
    TASK_READY = 'ready'
}

export interface TaskSchema {
    userId: number;
    title: string,
    description?: string,
    completed: boolean,
    time: {
        startDate: number,
        endDate: number,
    },
    tags?: string[],
    type?: TaskProcess,
}
