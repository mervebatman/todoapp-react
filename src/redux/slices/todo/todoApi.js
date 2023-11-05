import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'utils/axiosBaseQuery';

export const todoInfoApi = createApi({
  reducerPath: 'todoInfoApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['todos'],
  endpoints: (builder) => ({
    postTodoInfo: builder.mutation({
      query: ({ data }) => ({
        data,
        method: 'POST',
        path: `api/todo`,
      }),
      invalidatesTags: ['todos'],
    }),
    getTodos: builder.query({
      query: () => ({
        method: 'GET',
        path: `api/todos`,
      }),
      providesTags: ['todos'],
    }),

    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        method: 'DELETE',
        path: `api/todos/${id}/delete`,
      }),
      invalidatesTags: ['todos'],
    }),

    updateTodo: builder.mutation({
      query: ({ id, data }) => ({
        data,
        method: 'PUT',
        path: `api/todos/${id}/update`,
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});

export const todoApiReducerName = todoInfoApi.reducerPath;
export const TodoApiReducer = todoInfoApi.reducer;
export const todoMiddleware = todoInfoApi.middleware;

export const {
  usePostTodoInfoMutation,
  useGetTodosQuery,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoInfoApi;
