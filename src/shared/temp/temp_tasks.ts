import { TaskEntity } from 'entities/Tasks/model/type/Task';

export const tempPageLoading = 100;

export const tempLists = [{ id: 1, value: 'list 1' }, { id: 1, value: 'list 3' },
    { id: 1, value: 'list 2' }, { id: 1, value: 'list 4' }];

export const tempTasks: TaskEntity[] = [
    {
        title: 'Какая-то задача',
        description: 'Определение произвольных задач. Вы можете описать в файле tasks.vs.json '
            + 'произвольную задачу, которая предназначена для выполнения любого действия.',
        time: { startDate: 0, endDate: 150 },
        completed: false,
        id: 1,
        tags: [],
        list: tempLists[1],
        subtasks: [],
    },
    {
        title: 'Задача',
        description: 'Вы можете описать в файле tasks.vs.json '
            + 'произвольную  действия.',
        time: { startDate: 220, endDate: 320 },
        completed: false,
        id: 1,
        tags: [],
        subtasks: [],
    },
    {
        title: 'Дело',
        description: 'tasks.vs.json '
            + 'произвольную задачу, которая предназначена для выполнения любого действия.',
        time: { startDate: 400, endDate: 680 },
        completed: false,
        id: 1,
        tags: [],
        subtasks: [],
    },
    {
        title: 'Кто такой?',
        description: 'произвольных задач. Вы можете описать в файле tasks.vs.json '
            + 'произвольную задачу,  любого действия.',
        time: { startDate: 820, endDate: 1300 },
        completed: false,
        id: 1,
        tags: [],
        subtasks: [],
    },
];

export const shiftTasks: TaskEntity[] = [
    {
        title: 'Какая-то задача',
        description: 'Определение произвольных задач. Вы можете описать в файле tasks.vs.json '
            + 'произвольную задачу, которая предназначена для выполнения любого действия.',
        time: { startDate: 0, endDate: 150 },
        completed: false,
        id: 1,
    },
    {
        title: 'Задача',
        description: 'Вы можете описать в файле tasks.vs.json '
            + 'произвольную  действия.',
        time: { startDate: 220, endDate: 320 },
        completed: false,
        id: 1,
    },
];
