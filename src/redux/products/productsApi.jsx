import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = process.env.REACT_APP_BACKEND_URL;

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://dersim-new-blog-backend.vercel.app/api/`,
  }),
  endpoints: (builder) => ({
    // Modify this to accept a `language` parameter
    getAllProducts: builder.query({
      query: (language) => `products/language/${language}`, // Adjust endpoint to include the language
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
