interface ListItem {
    id?: number,
    value: string,
    label: string,
}

export interface IList {
    title: string,
    list: ListItem[]
}
