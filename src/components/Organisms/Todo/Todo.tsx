import React, { useState } from 'react';
import { TodoItem } from '../../Molecules/TodoItem/TodoItem';
import '../../../App.css';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { handleCreateTodo, handleDeleteTodo, handleUpdateTodoTitle } from '../../../App';

export type TodoData = {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoProps {
  todosData?: Array<TodoData>;
  handleCreateTodo: handleCreateTodo;
  handleDeleteTodo: handleDeleteTodo;
  handleUpdateTodoTitle: handleUpdateTodoTitle;
}

function Todo({ todosData = [], handleCreateTodo, handleDeleteTodo, handleUpdateTodoTitle }: TodoProps) {
  return (
    <div data-testid="todo" role="group" className={"todo-panel"}>
      <TodoMenu handleCreateTodo={handleCreateTodo}
        isAllTodosCompleted={false}
      />
      <TodoList 
        todosData={todosData} 
        handleDeleteTodo={handleDeleteTodo} 
        handleUpdateTodoTitle={handleUpdateTodoTitle} 
      />
      {todosData.length !== 0 && <TodoFooter todosQuantity={todosData.length} />}
    </div>
  );
}

export default Todo;
