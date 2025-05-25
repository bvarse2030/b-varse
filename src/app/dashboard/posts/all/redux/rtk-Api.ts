/*
|-----------------------------------------
| setting up PostsApi for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, February, 2024
|-----------------------------------------
*/

// This file is use for rest api
import { apiSlice } from '@/redux/api/apiSlice';
import { IPosts } from '../api/v1/Model';
import { handleError, handleSuccess } from '../components/utils';

// Use absolute paths with leading slash to ensure consistent behavior
export const postsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query({
      query: ({ page, limit, q }) => {
        let url = `/dashboard/posts/all/api/v1?page=${page || 1}&limit=${limit || 10}`;
        if (q) {
          url += `&q=${encodeURIComponent(q)}`;
        }
        return url;
      },
      providesTags: [{ type: 'tagTypePosts', id: 'LIST' }],
      async onQueryStarted() {
        try {
          // You can add any additional logic here
        } catch (e: unknown) {
          handleError(e);
        }
      },
    }),
    getPostsById: builder.query({
      query: id => `/dashboard/posts/all/api/v1?id=${id}`,
    }),
    addPosts: builder.mutation({
      query: newPosts => ({
        url: '/dashboard/posts/all/api/v1',
        method: 'POST',
        body: newPosts,
      }),
      invalidatesTags: [{ type: 'tagTypePosts' }],
      async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
        try {
          const { data }: { data: { data: IPosts; message: string } } = await queryFulfilled;
          handleSuccess(data.message);
          dispatch(postsApi.util.invalidateTags([{ type: 'tagTypePosts' }]));
        } catch (e: unknown) {
          handleError(e);
        }
      },
    }),
    updatePosts: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/dashboard/posts/all/api/v1`,
        method: 'PUT',
        body: { id: id, ...data },
      }),
      invalidatesTags: [{ type: 'tagTypePosts' }],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data }: { data: { message: string } } = await queryFulfilled;
          handleSuccess(data.message);
        } catch (e: unknown) {
          handleError(e);
        }
      },
    }),
    deletePosts: builder.mutation({
      query: ({ id }) => ({
        url: `/dashboard/posts/all/api/v1`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: [{ type: 'tagTypePosts' }],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data }: { data: { message: string } } = await queryFulfilled;
          handleSuccess(data.message);
        } catch (e: unknown) {
          handleError(e);
        }
      },
    }),
    bulkUpdatePosts: builder.mutation({
      query: bulkData => ({
        url: `/dashboard/posts/all/api/v1?bulk=true`,
        method: 'PUT',
        body: bulkData,
      }),
      invalidatesTags: [{ type: 'tagTypePosts' }],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data }: { data: { message: string } } = await queryFulfilled;
          handleSuccess(data.message);
        } catch (e: unknown) {
          handleError(e);
        }
      },
    }),
    bulkDeletePosts: builder.mutation({
      query: bulkData => ({
        url: `/dashboard/posts/all/api/v1?bulk=true`,
        method: 'DELETE',
        body: bulkData,
      }),
      invalidatesTags: [{ type: 'tagTypePosts' }],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data }: { data: { message: string } } = await queryFulfilled;
          handleSuccess(data.message);
        } catch (e: unknown) {
          handleError(e);
        }
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostsMutation,
  useUpdatePostsMutation,
  useDeletePostsMutation,
  useBulkUpdatePostsMutation,
  useBulkDeletePostsMutation,
  useGetPostsByIdQuery,
} = postsApi;
