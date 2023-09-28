export interface IList {
    title: string,
    list: ListItem[]
}

interface ListItem {
    id?: number,
    value: string,
    label: string,
}
