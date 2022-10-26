import React, { useState } from "react";
import { IsCompletedFilterControllerReturnType } from "../../../../controllers/IsCompletedFilterController";
import { TodoTaskControllerReturnType } from "../../../../controllers/TodoTaskController";
import Button from "../../Atoms/Button/Button";
import "./todo-footer.css";

interface TodoFooter {
  isCompletedFilterController: IsCompletedFilterControllerReturnType;
  todoTaskController: TodoTaskControllerReturnType;
}

function TodoFooter({ todoTaskController, isCompletedFilterController }: TodoFooter) {
  const {
    handleDeleteAllCompletedTodoTasks,
    getOnlyActiveTodoTasks,
    getIsThereAnyTodoTaskCompleted,
  } = todoTaskController;

  const {handleChangeFilter, getIsCompletedFilter} = isCompletedFilterController;
  const filter = getIsCompletedFilter();
  const handleClick = (filter?: boolean): void => {
    handleChangeFilter(filter);
  };

  return (
    <div role="group" className={`todo-footer`}>
      <span className={`todo-count`}>
        <strong>{getOnlyActiveTodoTasks().length}&nbsp;</strong>
        item left
      </span>
      <ul className={`todo-filters`}>
        <li>
          <a
            title={"Filter all todo tasks"}
            className={`todo-filter ${filter == undefined ? "active" : ""}`}
            onClick={(e) => handleClick(undefined)}
            href="#/"
          >
            All
          </a>
        </li>
        <li>
          <a
            title={"Filter active todo tasks"}
            className={`todo-filter ${filter == false ? "active" : ""}`}
            onClick={(e) => handleClick(false)}
            href="#/active"
          >
            Active
          </a>
        </li>
        <li>
          <a
            title={"Filter completed todo tasks"}
            className={`todo-filter ${filter == true ? "active" : ""}`}
            onClick={(e) => handleClick(true)}
            href="#/completed"
          >
            Completed
          </a>
        </li>
      </ul>
      {getIsThereAnyTodoTaskCompleted() === true && (
        <Button
          handleFunction={handleDeleteAllCompletedTodoTasks}
          title={"Clear Completed"}
          variant={"primary"}
          size={"small"}
          fontColor={"gray"}
        />
      )}
    </div>
  );
}

export default TodoFooter;
