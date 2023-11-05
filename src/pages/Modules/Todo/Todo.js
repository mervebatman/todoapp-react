import React from 'react';

// import { Title3 } from 'components';

import { Card, Title2 } from 'components';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div>
      <Card className="flex flex-col md:flex-row !border-none !p-10 justify-center items-center">
        <div className="w-full md:w-auto bg-white shadow-design-lg p-10 space-y-4">
          <Title2 className="!font-bold text-center !text-blue-light ">
            Todos
          </Title2>
          <TodoForm />
          <TodoList />
        </div>
      </Card>
    </div>
  );
};

export default Todo;
