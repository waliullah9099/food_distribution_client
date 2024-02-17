import { baseApi } from "@/redux/api/baseApi";

const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getSinglePost: builder.query({
      query: (query) => ({
        url: `posts/${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllPostQuery, useGetSinglePostQuery } = postsApi;
