import React, { useState } from 'react';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { areThereTodoTasksCompleted, filterTodoTasksByIsCompleted, TodoTasks } from '../../../../domain/entities/TodoTask';
import { HandleFilter } from '../../../../App';
import { TodoTaskControllerReturnType } from '../../../controllers/TodoTaskController';
import { isArrayEmpty } from '../../../../lib/isArrayEmpty/isArrayEmpty';

interface TodoProps {
  todoTasks?: TodoTasks;
  filter?: boolean;
  todoTaskController: TodoTaskControllerReturnType;
  handleFilter: HandleFilter;
}

function Todo({ 
  todoTasks = [],
  filter= undefined, 
  todoTaskController,
  handleFilter
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
        isAllTodosCompleted={isCompleted}
        todoTaskController={todoTaskController}
      />
      <TodoList
        todoTasks={todoTasks}
        filter={filter}
        todoTaskController={todoTaskController}
      />
      {!isArrayEmpty(todoTasks) && <TodoFooter 
        todosQuantity={filterTodoTasksByIsCompleted({ todoTasks, isCompleted: false }).length}
        handleFilter={handleFilter}
        todoTaskController={todoTaskController}
        areThereTodoTasksCompleted={areThereTodoTasksCompleted({todoTasks})}      />}
    </div>
  );
}

export default Todo;
