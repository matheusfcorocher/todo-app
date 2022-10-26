import React, { useState } from 'react';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { TodoTaskControllerReturnType } from '../../../../controllers/TodoTaskController';
import { IsCompletedFilterControllerReturnType } from '../../../../controllers/IsCompletedFilterController';

interface TodoProps {
  isCompletedFilterController: IsCompletedFilterControllerReturnType;
  todoTaskController: TodoTaskControllerReturnType;
}

function Todo({
  isCompletedFilterController,
  todoTaskController,
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
            isCompletedFilterController={isCompletedFilterController}
            todoTaskController={todoTaskController}
          />
          <TodoFooter
            isCompletedFilterController={isCompletedFilterController}
            todoTaskController={todoTaskController}
            />
        </>
      }
    </div>
  );
}

export default Todo;
