import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const selectAuthUserData = (state: StateSchema) => state.user?.authData;
