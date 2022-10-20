import React, { useState } from 'react';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { TodoTaskControllerReturnType } from '../../../../controllers/TodoTaskController';
import { HandleFilter } from '../../../../../App';
import { todoTasksViewModel } from '../../../../models/TodoTaskViewModel';

interface TodoProps {
  filter?: boolean;
  todoTaskController: TodoTaskControllerReturnType;
  handleFilter: HandleFilter;
}

function Todo({
  filter = undefined,
  todoTaskController,
  handleFilter
}: TodoProps) {
  const { isTodoTasksNotEmpty, returnOnlyActiveTodoTasks, isThereAnyTodoTaskCompleted } = todoTasksViewModel;
  const { getTodoTasks } = todoTaskController;
  const todoTasks = getTodoTasks();

  return (
    <div data-testid="todo" role="group" className={"todo-panel"}>
      <TodoMenu
        isThereAnyTodoTaskCompleted={isThereAnyTodoTaskCompleted(todoTasks)}
        todoTaskController={todoTaskController}
      />
      {isTodoTasksNotEmpty(todoTasks) &&
        <>
          <TodoList
            filter={filter}
            todoTaskController={todoTaskController}
          />
          <TodoFooter
            activeTodoTasksQuantity={returnOnlyActiveTodoTasks(todoTasks).length}
            handleFilter={handleFilter}
            filter={filter}
            todoTaskController={todoTaskController}
            isThereAnyTodoTaskCompleted={isThereAnyTodoTaskCompleted(todoTasks)} />

        </>
      }
    </div>
  );
}

export default Todo;
