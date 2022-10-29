import React, { useState } from "react";
import { useTransition, animated, useSpring } from "@react-spring/web";
import { ResizeObserver } from "@juggle/resize-observer";
import "./todo.css";
import TodoMenu from "../../Molecules/TodoMenu/TodoMenu";
import TodoList from "../../Molecules/TodoList/TodoList";
import TodoFooter from "../../Molecules/TodoFooter/TodoFooter";
import { TodoTaskControllerReturnType } from "../../../../controllers/TodoTaskController";
import { IsCompletedFilterControllerReturnType } from "../../../../controllers/IsCompletedFilterController";
import useMeasure from "react-use-measure";

interface TodoProps {
  isCompletedFilterController: IsCompletedFilterControllerReturnType;
  todoTaskController: TodoTaskControllerReturnType;
}

function Todo({ isCompletedFilterController, todoTaskController }: TodoProps) {
  const { getIsTodoTasksNotEmpty } = todoTaskController;

  //Animations
  const todoBodyTransition = useTransition(getIsTodoTasksNotEmpty(), {
    from: { height: "0%" },
    enter: { height: "100%" },
    leave: { height: "0%" },
  });

  const [ref, { height }] = useMeasure({ polyfill: ResizeObserver });
  const todoPanelTransition = useSpring({
    height: {height},
  });

  return (
    <animated.div ref={ref} style={todoPanelTransition} data-testid="todo" role="group" className={"todo-panel"}>
      <TodoMenu todoTaskController={todoTaskController} />
      {todoBodyTransition((style, item) =>
        item && (
          <animated.div style={style}>
            <TodoList
              isCompletedFilterController={isCompletedFilterController}
              todoTaskController={todoTaskController}
            />
            <TodoFooter
              isCompletedFilterController={isCompletedFilterController}
              todoTaskController={todoTaskController}
            />
          </animated.div>
        )
      )}
    </animated.div>
  );
}

export default Todo;
