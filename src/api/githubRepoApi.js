import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubReposApi = createApi({
  reducerPath: 'repos',
  baseQuery: fetchBaseQuery({ baseUrl: '/search/repositories?q=' }),
  endpoints: (builder) => ({
    getRepos: builder.query({
      query: (repo) => repo,
    }),
  }),
});

export const {
  useGetReposQuery,
} = githubReposApi;
