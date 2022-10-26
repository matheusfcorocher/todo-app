import React, { useState } from 'react';
import './todo.css';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';
import { TodoTaskControllerReturnType } from '../../../../controllers/TodoTaskController';
import { IsCompletedFilterControllerReturnType } from '../../../../controllers/IsCompletedFilterController';
import { IsShowingTodoBodyControllerReturnType } from '../../../../controllers/IsShowingTodoBodyController';

interface TodoProps {
  todoTaskController: TodoTaskControllerReturnType;
  isCompletedFilterController: IsCompletedFilterControllerReturnType;
  isShowingTodoBodyController: IsShowingTodoBodyControllerReturnType;
}

function Todo({
  isCompletedFilterController,
  todoTaskController,
  isShowingTodoBodyController
}: TodoProps) {
  const { getIsTodoTasksNotEmpty } = todoTaskController;
  const { getIsShowingTodoBody } = isShowingTodoBodyController;

  return (
    <div data-testid="todo" role="group" className={"todo-panel"}>
      <TodoMenu
        todoTaskController={todoTaskController}
        isShowingTodoBodyController={isShowingTodoBodyController}
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
