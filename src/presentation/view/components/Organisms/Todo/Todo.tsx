import React, { useState } from 'react';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { areThereTodoTasksCompleted, filterTodoTasksByIsCompleted, TodoTasks } from '../../../../../domain/entities/TodoTask';
import { TodoTaskControllerReturnType } from '../../../../controllers/TodoTaskController';
import { HandleFilter } from '../../../../../App';
import { todoTaskViewModel } from '../../../../models/TodoTaskViewModel';

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
  const {isTodoTasksNotEmpty, isAllTodoTasksCompleted} = todoTaskViewModel;

  return (
    <div data-testid="todo" role="group" className={"todo-panel"}>
      <TodoMenu
        isAllTodosCompleted={isAllTodoTasksCompleted(todoTasks)}
        todoTaskController={todoTaskController}
      />
      <TodoList
        todoTasks={todoTasks}
        filter={filter}
        todoTaskController={todoTaskController}
      />
      {isTodoTasksNotEmpty(todoTasks) && <TodoFooter 
        todosQuantity={filterTodoTasksByIsCompleted({ todoTasks, isCompleted: false }).length}
        handleFilter={handleFilter}
        todoTaskController={todoTaskController}
        areThereTodoTasksCompleted={areThereTodoTasksCompleted({todoTasks})}      />}
    </div>
  );
}

export default Todo;
