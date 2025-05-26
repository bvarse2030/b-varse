/*
|-----------------------------------------
| setting up Users_1_000___Api for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, February, 2024
|-----------------------------------------
*/

// This file is use for rest api
import { apiSlice } from '@/redux/api/apiSlice';
import { IUsers_1_000___ } from '../api/v1/Model';
import { handleError, handleSuccess, isApiErrorResponse } from '../components/utils';

// Use absolute paths with leading slash to ensure consistent behavior
export const users_1_000___Api = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers_1_000___: builder.query({
      query: ({ page, limit, q }) => {
        let url = `/dashboard/a__1_1001_users__/all/api/v1?page=${page || 1}&limit=${limit || 10}`;
        if (q) {
          url += `&q=${encodeURIComponent(q)}`;
        }
        return url;
      },
      providesTags: [{ type: 'tagTypeUsers_1_000___', id: 'LIST' }],
      async onQueryStarted() {
        try {
          // You can add any additional logic here
        } catch (error: unknown) {
          let errMessage: string = 'Please try again later and check duplicate data or check input.';
          if (isApiErrorResponse(error)) {
            errMessage = error.data.message.toLowerCase().includes('duplicate') ? 'Please provide an unique email' : error.data.message;
          } else if (error instanceof Error) {
            errMessage = error.message;
          }
          handleError(errMessage);
        }
      },
    }),
    getUsers_1_000___ById: builder.query({
      query: id => `/dashboard/a__1_1001_users__/all/api/v1?id=${id}`,
    }),
    addUsers_1_000___: builder.mutation({
      query: newUsers_1_000___ => ({
        url: '/dashboard/a__1_1001_users__/all/api/v1',
        method: 'POST',
        body: newUsers_1_000___,
      }),
      invalidatesTags: [{ type: 'tagTypeUsers_1_000___' }],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data }: { data: { data: IUsers_1_000___; message: string } } = await queryFulfilled;
          handleSuccess(data.message);
          dispatch(users_1_000___Api.util.invalidateTags([{ type: 'tagTypeUsers_1_000___' }]));
        } catch (error: unknown) {
          let errMessage: string = 'Please try again later and check duplicate data or check input.';
          if (isApiErrorResponse(error)) {
            errMessage = error.data.message.toLowerCase().includes('duplicate') ? 'Please provide an unique email' : error.data.message;
          } else if (error instanceof Error) {
            errMessage = error.message;
          }
          handleError(errMessage);
        }
      },
    }),
    updateUsers_1_000___: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/dashboard/a__1_1001_users__/all/api/v1`,
        method: 'PUT',
        body: { id: id, ...data },
      }),
      invalidatesTags: [{ type: 'tagTypeUsers_1_000___' }],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data }: { data: { message: string } } = await queryFulfilled;
          handleSuccess(data.message);
        } catch (error: unknown) {
          let errMessage: string = 'Please try again later and check duplicate data or check input.';
          if (isApiErrorResponse(error)) {
            errMessage = error.data.message.toLowerCase().includes('duplicate') ? 'Please provide an unique email' : error.data.message;
          } else if (error instanceof Error) {
            errMessage = error.message;
          }
          handleError(errMessage);
        }
      },
    }),
    deleteUsers_1_000___: builder.mutation({
      query: ({ id }) => ({
        url: `/dashboard/a__1_1001_users__/all/api/v1`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: [{ type: 'tagTypeUsers_1_000___' }],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data }: { data: { message: string } } = await queryFulfilled;
          handleSuccess(data.message);
        } catch (error: unknown) {
          let errMessage: string = 'Please try again later and check duplicate data or check input.';
          if (isApiErrorResponse(error)) {
            errMessage = error.data.message.toLowerCase().includes('duplicate') ? 'Please provide an unique email' : error.data.message;
          } else if (error instanceof Error) {
            errMessage = error.message;
          }
          handleError(errMessage);
        }
      },
    }),
    bulkUpdateUsers_1_000___: builder.mutation({
      query: bulkData => ({
        url: `/dashboard/a__1_1001_users__/all/api/v1?bulk=true`,
        method: 'PUT',
        body: bulkData,
      }),
      invalidatesTags: [{ type: 'tagTypeUsers_1_000___' }],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data }: { data: { message: string } } = await queryFulfilled;
          handleSuccess(data.message);
        } catch (error: unknown) {
          let errMessage: string = 'Please try again later and check duplicate data or check input.';
          if (isApiErrorResponse(error)) {
            errMessage = error.data.message.toLowerCase().includes('duplicate') ? 'Please provide an unique email' : error.data.message;
          } else if (error instanceof Error) {
            errMessage = error.message;
          }
          handleError(errMessage);
        }
      },
    }),
    bulkDeleteUsers_1_000___: builder.mutation({
      query: bulkData => ({
        url: `/dashboard/a__1_1001_users__/all/api/v1?bulk=true`,
        method: 'DELETE',
        body: bulkData,
      }),
      invalidatesTags: [{ type: 'tagTypeUsers_1_000___' }],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data }: { data: { message: string } } = await queryFulfilled;
          handleSuccess(data.message);
        } catch (error: unknown) {
          let errMessage: string = 'Please try again later and check duplicate data or check input.';
          if (isApiErrorResponse(error)) {
            errMessage = error.data.message.toLowerCase().includes('duplicate') ? 'Please provide an unique email' : error.data.message;
          } else if (error instanceof Error) {
            errMessage = error.message;
          }
          handleError(errMessage);
        }
      },
    }),
  }),
});

export const {
  useGetUsers_1_000___Query,
  useAddUsers_1_000___Mutation,
  useUpdateUsers_1_000___Mutation,
  useDeleteUsers_1_000___Mutation,
  useBulkUpdateUsers_1_000___Mutation,
  useBulkDeleteUsers_1_000___Mutation,
  useGetUsers_1_000___ByIdQuery,
} = users_1_000___Api;
