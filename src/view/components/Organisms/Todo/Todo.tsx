import React, { useState } from 'react';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { TodoTasks } from '../../../../domain/entities/TodoTask';
import { HandleCompleteTodoItems, HandleCreateTodo, HandleDeleteTodo, HandleIncompleteTodoItems, HandleUpdateTodoState, HandleUpdateTodoTitle } from '../../../../App';

interface TodoProps {
  todoTasks?: TodoTasks;
  handleCreateTodo: HandleCreateTodo;
  handleDeleteTodo: HandleDeleteTodo;
  handleUpdateTodoTitle: HandleUpdateTodoTitle;
  handleUpdateTodoState: HandleUpdateTodoState;
  handleCompleteAllTodoItems: HandleCompleteTodoItems;
  handleIncompleteAllTodoItems: HandleIncompleteTodoItems;
}

function Todo({ 
  todoTasks = [], 
  handleCreateTodo, 
  handleDeleteTodo, 
  handleUpdateTodoTitle, 
  handleUpdateTodoState, 
  handleCompleteAllTodoItems, 
  handleIncompleteAllTodoItems }: TodoProps) {
  const isCompleted = isAllTodosCompleted(todoTasks);

  function isAllTodosCompleted(todoTasks: TodoTasks): boolean {
    const isAllTodosCompleted = todoTasks.find(todo => todo.isCompleted == true);
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
        todoTasks={todoTasks}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodoTitle={handleUpdateTodoTitle}
        handleUpdateTodoState={handleUpdateTodoState}
      />
      {todoTasks.length !== 0 && <TodoFooter todosQuantity={todoTasks.length} />}
    </div>
  );
}

export default Todo;
