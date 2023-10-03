export interface UserEntity {
    id: number,
    username: string,
}

export interface UserSchema {
    authData?: UserEntity
}
