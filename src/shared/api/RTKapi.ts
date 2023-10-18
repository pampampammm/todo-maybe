import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const baseurl = 'http://localhost:8000/';

export const rtkAPI = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (token) headers.set('Authorization', token);
            return headers;
        },
    }),
    endpoints: (build) => ({}),
});
