import React, { useState } from 'react';
import { TodoItem } from '../../Molecules/TodoItem/TodoItem';
import '../../../App.css';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';

type TodoData = {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoProps {
  todosData?: Array<TodoData>;
}

function Todo({ todosData = [] }: TodoProps) {
  return (
    <div data-testid="todo" role="group" className={"todo-panel"}>
      <TodoMenu handleCreateTodo={function (): void {
        throw new Error('Function not implemented.');
      }} isAllTodosCompleted={false}
      />
      <TodoList todosData={todosData} />
      {todosData.length !== 0 && <TodoFooter todosQuantity={todosData.length} />}
    </div>
  );
}

export default Todo;
