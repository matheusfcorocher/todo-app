import React, { useState } from 'react';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { TodoTasks } from '../../../../../domain/entities/TodoTask';
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
  filter = undefined,
  todoTaskController,
  handleFilter
}: TodoProps) {
  const { isTodoTasksNotEmpty, returnOnlyActiveTodoTasks, isThereAnyTodoTaskCompleted } = todoTaskViewModel;

  return (
    <div data-testid="todo" role="group" className={"todo-panel"}>
      <TodoMenu
        isThereAnyTodoTaskCompleted={isThereAnyTodoTaskCompleted(todoTasks)}
        todoTaskController={todoTaskController}
      />
      <TodoList
        todoTasks={todoTasks}
        filter={filter}
        todoTaskController={todoTaskController}
      />
      {isTodoTasksNotEmpty(todoTasks) && <TodoFooter
        activeTodoTasksQuantity={returnOnlyActiveTodoTasks(todoTasks).length}
        handleFilter={handleFilter}
        todoTaskController={todoTaskController}
        isThereAnyTodoTaskCompleted={isThereAnyTodoTaskCompleted(todoTasks)} />}
    </div>
  );
}

export default Todo;
