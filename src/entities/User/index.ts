import { getUserData } from 'entities/User/model/selector/getUserData/getUserData';
import { userActions, userReducers } from './model/slice/userSlice';
import { UserEntity, UserSchema } from './model/type/UserEntity';

export {
    userActions,
    userReducers,
    UserSchema,
    UserEntity,
    getUserData,
};
