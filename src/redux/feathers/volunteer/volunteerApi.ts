import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVolunteer: builder.mutation({
      query: (data) => ({
        url: "/volunteers",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateVolunteerMutation } = volunteerApi;
