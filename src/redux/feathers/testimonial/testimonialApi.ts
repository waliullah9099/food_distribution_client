import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonials",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["testimonial"],
    }),
    getAllTetimonial: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),
  }),
});

export const { useCreateTestimonialMutation, useGetAllTetimonialQuery } =
  testimonialApi;
