import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/'
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => '/data',
      transformResponse: (response) => response.data.children
    }),
  })
})

export const { useGetDataQuery } = apiSlice