import React, { useState } from 'react';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { areThereTodoTasksCompleted, filterTodoTasksByIsCompleted, TodoTasks } from '../../../../domain/entities/TodoTask';
import { HandleCompleteTodoItems, HandleCreateTodo, HandleDeleteAllCompletedTodoTasks, HandleDeleteTodo, HandleFilter, HandleIncompleteTodoItems, HandleUpdateTodoState, HandleUpdateTodoTitle } from '../../../../App';

interface TodoProps {
  todoTasks?: TodoTasks;
  filter?: boolean;
  handleCreateTodo: HandleCreateTodo;
  handleDeleteTodo: HandleDeleteTodo;
  handleUpdateTodoTitle: HandleUpdateTodoTitle;
  handleUpdateTodoState: HandleUpdateTodoState;
  handleCompleteAllTodoItems: HandleCompleteTodoItems;
  handleIncompleteAllTodoItems: HandleIncompleteTodoItems;
  handleFilter: HandleFilter;
  handleDeleteAllCompletedTodoTasks: HandleDeleteAllCompletedTodoTasks;
}

function Todo({ 
  todoTasks = [],
  filter= undefined, 
  handleCreateTodo, 
  handleDeleteTodo, 
  handleUpdateTodoTitle, 
  handleUpdateTodoState, 
  handleCompleteAllTodoItems, 
  handleIncompleteAllTodoItems,
  handleFilter,
  handleDeleteAllCompletedTodoTasks 
}: TodoProps) {
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
        filter={filter}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodoTitle={handleUpdateTodoTitle}
        handleUpdateTodoState={handleUpdateTodoState}
      />
      {todoTasks.length !== 0 && <TodoFooter 
        todosQuantity={filterTodoTasksByIsCompleted({ todoTasks, isCompleted: false }).length}
        handleFilter={handleFilter}
        handleDeleteAllCompletedTodoTasks={handleDeleteAllCompletedTodoTasks} 
        areThereTodoTasksCompleted={areThereTodoTasksCompleted({todoTasks})}      />}
    </div>
  );
}

export default Todo;
