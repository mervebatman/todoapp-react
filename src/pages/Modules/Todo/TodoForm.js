import React from 'react';

import { Button, Input } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { usePostTodoInfoMutation } from 'redux/slices/todo/todoApi';
import {
  todoInfoSelector,
  updateTodoInfoField,
} from 'redux/slices/todo/todoSlices';
import Swal from 'sweetalert2';
import { apiResHandler } from 'utils/axiosBaseQuery';

const TodoForm = () => {
  const dispatch = useDispatch();

  const todoInfoSlc = useSelector(todoInfoSelector);

  const [addNewTodo] = usePostTodoInfoMutation();

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateTodoInfoField({ field: name, value }));
  };

  const saveTodo = (e) => {
    e.preventDefault();

    if (todoInfoSlc.todo !== '') {
      apiResHandler(
        addNewTodo({ data: todoInfoSlc }),
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Added todo successfully!',
          showConfirmButton: false,
          timer: 1500,
        })
      );
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Todo cannot be a null character!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <form onSubmit={saveTodo} className="flex">
          <Input
            type="text"
            name="todo"
            placeholder="Add todo"
            value={todoInfoSlc.todo}
            onChange={handleInputOnChange}
          />

          <Button
            text="Save"
            textVariant="white"
            className="!w-auto !px-4 !rounded-full bg-blue-light border-none"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
