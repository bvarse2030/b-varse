/*
|-----------------------------------------
| setting up ApiSlice for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, February, 2024
|-----------------------------------------
*/

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
  tagTypes: ['tagTypePosts'],
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.baseURL,
    credentials: 'include', // Include credentials for cross-origin requests
    prepareHeaders: async (headers, {}) => {
      const tokenFromSessionStorage = sessionStorage.getItem(process.env.NEXTAUTH_SECRET || '_');
      const token = tokenFromSessionStorage?.replaceAll('"', '');
      const localStorageToken = localStorage.getItem('token')?.replaceAll('"', '');
      const finalToken = localStorageToken || token;
      console.log('rtk finalToken: ', finalToken);
      if (finalToken) {
        headers.set('authorization', `Bearer ${finalToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
