import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonials",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateTestimonialMutation } = testimonialApi;
