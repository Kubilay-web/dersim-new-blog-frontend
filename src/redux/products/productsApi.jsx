import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = process.env.REACT_APP_BACKEND_URL;

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL}/` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`, // Make sure this matches your API endpoint
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
