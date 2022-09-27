import React, { useState } from 'react';
import { TodoItem } from '../../Molecules/TodoItem/TodoItem';
import '../../../App.css';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { handleCompleteTodoItems, handleCreateTodo, handleDeleteTodo, handleIncompleteTodoItems, handleUpdateTodoState, handleUpdateTodoTitle } from '../../../App';

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
  handleUpdateTodoState: handleUpdateTodoState;
  handleCompleteAllTodoItems: handleCompleteTodoItems;
  handleIncompleteAllTodoItems: handleIncompleteTodoItems;
}

function Todo({ todosData = [], handleCreateTodo, handleDeleteTodo, handleUpdateTodoTitle, handleUpdateTodoState, handleCompleteAllTodoItems,  handleIncompleteAllTodoItems}: TodoProps) {
  const isCompleted = isAllTodosCompleted(todosData);
  
  function isAllTodosCompleted(todosData: Array<TodoData>) : boolean {
    const isAllTodosCompleted = todosData.find(todo => todo.isCompleted == true);
    if(isAllTodosCompleted) {
      return true;
    }
    
    return false;
  }

  return (
    <div data-testid="todo" role="group" className={"todo-panel"}>
      <TodoMenu 
        handleCreateTodo={handleCreateTodo}
        isAllTodosCompleted={isCompleted} 
        handleCompleteAllTodoItems={handleCompleteAllTodoItems} 
        handleIncompleteAllTodoItems={handleIncompleteAllTodoItems}
      />
      <TodoList
        todosData={todosData}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodoTitle={handleUpdateTodoTitle}
        handleUpdateTodoState={handleUpdateTodoState}
      />
      {todosData.length !== 0 && <TodoFooter todosQuantity={todosData.length} />}
    </div>
  );
}

export default Todo;
