import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUserName';

export interface StateSchema {
    user: UserSchema,
    login: LoginSchema
}
