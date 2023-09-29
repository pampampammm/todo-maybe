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
}
