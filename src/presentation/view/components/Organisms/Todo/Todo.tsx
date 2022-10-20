import React, { useState } from 'react';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { TodoTaskControllerReturnType } from '../../../../controllers/TodoTaskController';
import { HandleFilter } from '../../../../../App';

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
  const { getIsTodoTasksNotEmpty } = todoTaskController;

  return (
    <div data-testid="todo" role="group" className={"todo-panel"}>
      <TodoMenu
        todoTaskController={todoTaskController}
      />
      {getIsTodoTasksNotEmpty() &&
        <>
          <TodoList
            filter={filter}
            todoTaskController={todoTaskController}
          />
          <TodoFooter
            todoTaskController={todoTaskController}
            handleFilter={handleFilter}
            filter={filter}
            />
        </>
      }
    </div>
  );
}

export default Todo;
