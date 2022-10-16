import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notionApi = createApi({
  reducerPath: "notionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://js-advanced.herokuapp.com"
  }),
  endpoints: builder => ({
    getMenu: builder.query({
      query: () => "/getmenu"
    })
  })
});

export const { useGetMenuQuery } = notionApi;
