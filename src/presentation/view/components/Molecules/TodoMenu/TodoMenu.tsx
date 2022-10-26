import React, { useState } from "react";
import { IsShowingTodoBodyControllerReturnType } from "../../../../controllers/IsShowingTodoBodyController";
import { TodoTaskControllerReturnType } from "../../../../controllers/TodoTaskController";
import IconButton from "../../Atoms/IconButton/IconButton";
import ArrowDownIcon from "../../Atoms/icons/ArrowDownIcon/ArrowDownIcon";
import ArrowUpIcon from "../../Atoms/icons/ArrowUpIcon/ArrowUpIcon";
import "./todo-menu.css";

interface TodoMenuProps {
  todoTaskController: TodoTaskControllerReturnType;
  isShowingTodoBodyController: IsShowingTodoBodyControllerReturnType;
}

function TodoMenu({ todoTaskController, isShowingTodoBodyController }: TodoMenuProps) {
  const [title, setTitle] = useState<string>("");
  const {
    handleAddTodoTask,
    handleIncompleteAllTodoTasks,
    handleCompleteAllTodoTasks,
    getIsThereAnyTodoTaskCompleted,
    getIsTodoTasksNotEmpty
  } = todoTaskController;
  function handlePress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == "Enter") {
      handleAddTodoTask(title);
      setTitle("");
    }
  }

  return (
    <div role="group" className={`todo-menu`}>
      {getIsTodoTasksNotEmpty() &&
        <>
        {getIsThereAnyTodoTaskCompleted() ? (
          <IconButton
            title="Uncheck all todos"
            className="complete-button"
            handleFunction={() => handleIncompleteAllTodoTasks()}
          >
            <ArrowUpIcon className="list-icon" />
          </IconButton>
        ) : (
          <IconButton
            title="Check all todos"
            className="complete-button"
            handleFunction={() => handleCompleteAllTodoTasks()}
          >
            <ArrowDownIcon className="checklist-icon" />
          </IconButton>
        )}
        </>
      }
      <input
        type="text"
        role="textbox"
        placeholder="What needs to be done?"
        value={title}
        name="title"
        className={`title-input`}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(event) => handlePress(event)}
      />
    </div>
  );
}

export default TodoMenu;
