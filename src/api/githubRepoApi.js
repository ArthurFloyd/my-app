import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubReposApi = createApi({
  reducerPath: 'repos',
  baseQuery: fetchBaseQuery({ baseUrl: '/search/repositories' }),
  endpoints: (builder) => ({
    getRepos: builder.query({
      query: (repo) => `?q=${repo}`,
    }),
  }),
});

export const {
  useGetReposQuery,
} = githubReposApi;
