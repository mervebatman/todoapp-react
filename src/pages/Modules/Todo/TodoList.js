import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from 'redux/slices/todo/todoApi';
import { todoInfoSelector } from 'redux/slices/todo/todoSlices';
import Swal from 'sweetalert2';
import { apiResHandler } from 'utils/axiosBaseQuery';

const TodoList = () => {
  const [todos, setTodos] = useState();
  const todoInfoSlc = useSelector(todoInfoSelector);

  const { data: getTodos } = useGetTodosQuery();

  const [deleteTodo] = useDeleteTodoMutation();

  const [updateTodo] = useUpdateTodoMutation();

  useEffect(() => {
    setTodos(getTodos);
  }, [getTodos]);

  const handleDeleteTodo = (id) => {
    Swal.fire({
      title: 'Are you sure you want to delete this todo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTodo({ id }).then(() => {
          Swal.fire('Your todo has been deleted!', '', 'success');
        });
      }
    });
  };

  const handleUpdateTodoStatus = (id, isChecked) => {
    const updatedCompleted =
      isChecked !== '' ? isChecked : !todoInfoSlc.completed;

    apiResHandler(
      updateTodo({ id, data: { completed: updatedCompleted } }),
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Todo status updated!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  };

  return (
    <div>
      <ul>
        {todos?.todos?.map((item) => (
          <li key={item.id}>
            <div className="flex justify-between">
              <div className="cursor-pointer">
                <input
                  type="checkbox"
                  id={`checkbox-${item.id}`}
                  className="mr-2"
                  checked={item.completed}
                  onChange={(e) =>
                    handleUpdateTodoStatus(item.id, e.target.checked)
                  }
                />
                <label
                  htmlFor={`checkbox-${item.id}`}
                  className={`cursor-pointer ${
                    item.completed === 1 ? 'line-through' : ''
                  }`}
                >
                  {item.todo}
                </label>
              </div>

              <span
                className="cursor-pointer hover:text-red !font-bold pl-4"
                onClick={() => handleDeleteTodo(item.id)}
              >
                X
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
