import { TaskEntity } from 'entities/Tasks/model/type/Task';
import { List } from 'shared/ui/TagsArray/types/Tag';

export const tempPageLoading = 100;

export const tempLists: List[] = [
    { id: 1, value: 'list 1', color: 'tomato' },
    { id: 1, value: 'list 3', color: 'blue' },
    { id: 1, value: 'list 2', color: 'red' },
    { id: 1, value: 'list 4', color: 'yellow' }];

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
        subtasks: [{ id: 14, title: 'First Subtask', complete: true },
            { id: 14, title: 'Second Subtask', complete: true },
            { id: 14, title: 'Third Subtask', complete: false }],
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
