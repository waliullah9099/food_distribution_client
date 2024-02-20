import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://food-distribution-server.vercel.app/api/v1",
  }),
  tagTypes: ["post"],
  endpoints: () => ({}),
});
