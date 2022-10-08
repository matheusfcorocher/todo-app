import React, { useState } from 'react';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { TodoData } from '../../../../domain/entities/TodoData';
import { HandleCompleteTodoItems, HandleCreateTodo, HandleDeleteTodo, HandleIncompleteTodoItems, HandleUpdateTodoState, HandleUpdateTodoTitle } from '../../../../App';

interface TodoProps {
  todosData?: Array<TodoData>;
  handleCreateTodo: HandleCreateTodo;
  handleDeleteTodo: HandleDeleteTodo;
  handleUpdateTodoTitle: HandleUpdateTodoTitle;
  handleUpdateTodoState: HandleUpdateTodoState;
  handleCompleteAllTodoItems: HandleCompleteTodoItems;
  handleIncompleteAllTodoItems: HandleIncompleteTodoItems;
}

function Todo({ 
  todosData = [], 
  handleCreateTodo, 
  handleDeleteTodo, 
  handleUpdateTodoTitle, 
  handleUpdateTodoState, 
  handleCompleteAllTodoItems, 
  handleIncompleteAllTodoItems }: TodoProps) {
  const isCompleted = isAllTodosCompleted(todosData);

  function isAllTodosCompleted(todosData: Array<TodoData>): boolean {
    const isAllTodosCompleted = todosData.find(todo => todo.isCompleted == true);
    if (isAllTodosCompleted) {
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
