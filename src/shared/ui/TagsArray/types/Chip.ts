export interface Chip {
    id: number,
    text: string,
}

export interface Tag extends Chip{
    color?: string
}
