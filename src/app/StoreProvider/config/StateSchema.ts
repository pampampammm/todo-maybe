import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUserName';
import { TaskSchema } from 'entities/Tasks/model/type/Task';

export interface StateSchema {
    user: UserSchema,
    login: LoginSchema,
    task: TaskSchema
}
