import React, { useState } from "react";
import { animated, useTransition } from "@react-spring/web";
import { TodoTaskControllerReturnType } from "../../../../controllers/TodoTaskController";
import IconButton from "../../Atoms/IconButton/IconButton";
import ArrowDownIcon from "../../Atoms/icons/ArrowDownIcon/ArrowDownIcon";
import "./todo-menu.css";

interface TodoMenuProps {
  todoTaskController: TodoTaskControllerReturnType;
}

function TodoMenu({ todoTaskController }: TodoMenuProps) {
  const [title, setTitle] = useState<string>("");
  const {
    handleAddTodoTask,
    handleIncompleteAllTodoTasks,
    handleCompleteAllTodoTasks,
    getIsThereAnyTodoTaskCompleted,
    getIsTodoTasksNotEmpty,
  } = todoTaskController;
  function handlePress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == "Enter" && title !== "") {
      handleAddTodoTask(title);
      setTitle("");
    }
  }

  //Animations

  function convertRemToPixels(rem: number) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  //Icon Button Animation
  const iconButtonTransition = useTransition(getIsTodoTasksNotEmpty(), {
    from: { opacity: 0, width: 0 },
    enter: { opacity: 1, width: convertRemToPixels(2)},
    leave: { opacity: 0, width: 0 },
  });

  return (
    <div role="group" className={`todo-menu`}>
      {iconButtonTransition((style, item) =>
        item ? (
          <animated.div style={style}>
            {getIsThereAnyTodoTaskCompleted() ? (
              <IconButton
                title="Uncheck all todos"
                className="complete-button"
                handleFunction={() => handleIncompleteAllTodoTasks()}
              >
                <ArrowDownIcon className="list-icon" />
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
          </animated.div>
        ) : (
          ""
        )
      )}
      <input
        type="text"
        role="textbox"
        placeholder="What needs to be done?"
        value={title}
        name="title"
        className={`title-input ${getIsTodoTasksNotEmpty() ? "hidden" : ""}`}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(event) => handlePress(event)}
      />
    </div>
  );
}

export default TodoMenu;
