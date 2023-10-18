import { StateSchema } from 'app/StoreProvider';

export const getPageData = (state: StateSchema) => state.page?.entities;
export const getPageLoading = (state: StateSchema) => state.page?.isLoading || false;
export const getPageView = (state: StateSchema) => state.page?.editFormView || false;
export const getPageError = (state: StateSchema) => state.page?.error;
export const getPageTaskFormId = (state: StateSchema) => state.page?.editTaskId;
