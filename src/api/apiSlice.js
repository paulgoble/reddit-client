import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.reddit.com/'
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (userInput) => `/${userInput}.json`,
      transformResponse: (response) => response.data.children
    }),
  })
})

export const { useGetDataQuery } = apiSlice