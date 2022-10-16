import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notionApi = createApi({
  reducerPath: "notionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.notion.com/v1",
    prepareHeaders: headers => {
      headers.set("Authorization", process.env.REACT_APP_NOTION_SECRET);
      headers.set("Notion-Version", " 2022-02-22");
      return headers;
    }
  }),
  endpoints: builder => ({
    getMenu: builder.query({
      query: parentId => `/blocks/${parentId}/children`
    })
  })
});

export const { useGetMenuQuery } = notionApi;
