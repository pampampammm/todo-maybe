import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export const getUserData = (state: StateSchema) => state.user?.authData;
