import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseUrl = 'http://localhost:8000/';

export const $api = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery(
        { baseUrl },
    ),
    endpoints: (build) => ({}),
});
