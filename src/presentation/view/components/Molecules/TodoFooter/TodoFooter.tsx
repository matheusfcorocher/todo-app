import React, { useState } from "react";
import { HandleFilter } from "../../../../../App";
import { TodoTaskControllerReturnType } from "../../../../controllers/TodoTaskController";
import Button from "../../Atoms/Button/Button";
import "./todo-footer.css";

interface TodoFooter {
  filter?: boolean;
  handleFilter: HandleFilter;
  todoTaskController: TodoTaskControllerReturnType;
}

function TodoFooter({ handleFilter, todoTaskController, filter }: TodoFooter) {
  const {
    handleDeleteAllCompletedTodoTasks,
    getOnlyActiveTodoTasks,
    getIsThereAnyTodoTaskCompleted,
  } = todoTaskController;

  const handleClick = (filter?: boolean): void => {
    handleFilter(filter);
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
          title={"Clear Completed todo tasks"}
          variant={"primary"}
          size={"medium"}
          fontColor={"gray"}
        />
      )}
    </div>
  );
}

export default TodoFooter;
