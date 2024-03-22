import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVolunteer: builder.mutation({
      query: (data) => ({
        url: "/volunteers",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["volunteer"],
    }),
    getAllVolunteer: builder.query({
      query: () => ({
        url: "/volunteers",
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),
  }),
});

export const { useCreateVolunteerMutation, useGetAllVolunteerQuery } =
  volunteerApi;
