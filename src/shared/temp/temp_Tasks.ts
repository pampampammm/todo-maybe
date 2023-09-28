import {TaskSchema} from "entities/TaskList/type/Task";


export const temp_Tasks: TaskSchema[] = [
    {
        title: "Какая-то задача",
        description: "Определение произвольных задач. Вы можете описать в файле tasks.vs.json " +
            "произвольную задачу, которая предназначена для выполнения любого действия.",
        time: {startDate: 0, endDate: 150},
        completed: false,
        userId: 1,
    },
    {
        title: "Задача",
        description: "Вы можете описать в файле tasks.vs.json " +
            "произвольную  действия.",
        time: {startDate: 220, endDate: 320},
        completed: false,
        userId: 1,
    },
    {
        title: "Дело",
        description: "tasks.vs.json " +
            "произвольную задачу, которая предназначена для выполнения любого действия.",
        time: {startDate: 400, endDate: 680},
        completed: false,
        userId: 1,
    },
    {
        title: "Кто такой?",
        description: "произвольных задач. Вы можете описать в файле tasks.vs.json " +
            "произвольную задачу,  любого действия.",
        time: {startDate: 820, endDate: 1300},
        completed: false,
        userId: 1,
    },
]

export const temp_pageLoading = 700