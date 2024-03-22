import { baseApi } from "@/redux/api/baseApi";

const gratitudeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createGratitude: builder.mutation({
      query: (data) => ({
        url: "/community",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
    getAllGratitude: builder.query({
      query: () => ({
        url: "/community",
        method: "GET",
      }),
      providesTags: ["comment"],
    }),
  }),
});

export const { useCreateGratitudeMutation, useGetAllGratitudeQuery } =
  gratitudeApi;
