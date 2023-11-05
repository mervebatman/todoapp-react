import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoInfo: {
    todo: '',
    completed: null,
  },
};

export const todoSlice = createSlice({
  name: 'todoInformation',
  initialState,
  reducers: {
    updateTodoInfoField: (state, action) => {
      const { field, value } = action.payload;
      state.todoInfo[field] = value;
    },
  },
});

export const todoInfoSelector = (state) => state.todoInformation.todoInfo;

export const { updateTodoInfoField } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
export const todoReducerName = todoSlice.name;

export default todoSlice.reducer;
