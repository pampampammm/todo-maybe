import { StateSchema } from 'app/StoreProvider';

export const getMainPageData = (state: StateSchema) => state.mainPage?.entities;
export const getMainPageLoading = (state: StateSchema) => state.mainPage?.isLoading || false;
export const getMainPageView = (state: StateSchema) => state.mainPage?.editFormView || false;
export const getMainPageError = (state: StateSchema) => state.mainPage?.error;
export const getMainPageTaskFormId = (state: StateSchema) => state.mainPage?.editTaskId;
