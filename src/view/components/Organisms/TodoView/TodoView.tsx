import React, { useState } from 'react';
import './todo-view.css';
import TodoMenuView from '../../Molecules/TodoMenuView/TodoMenuView';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { TodoData } from '../../../../domain/entities/TodoData';
import { HandleCompleteTodoItems, HandleCreateTodo, HandleDeleteTodo, HandleIncompleteTodoItems, HandleUpdateTodoState, HandleUpdateTodoTitle } from '../../../../App';

interface TodoViewProps {
  todosData?: Array<TodoData>;
  handleCreateTodo: HandleCreateTodo;
  handleDeleteTodo: HandleDeleteTodo;
  handleUpdateTodoTitle: HandleUpdateTodoTitle;
  handleUpdateTodoState: HandleUpdateTodoState;
  handleCompleteAllTodoItems: HandleCompleteTodoItems;
  handleIncompleteAllTodoItems: HandleIncompleteTodoItems;
}

function TodoView({ 
  todosData = [], 
  handleCreateTodo, 
  handleDeleteTodo, 
  handleUpdateTodoTitle, 
  handleUpdateTodoState, 
  handleCompleteAllTodoItems, 
  handleIncompleteAllTodoItems }: TodoViewProps) {
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
      <TodoMenuView
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

export default TodoView;
