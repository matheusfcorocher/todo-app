import React, { useState } from "react";
import { animated, useSpring, useTransition } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";

import { filterTodoTasksByIsCompleted, TodoTask } from "../../../../../domain/entities/TodoTask";
import { IsCompletedFilterControllerReturnType } from "../../../../controllers/IsCompletedFilterController";
import { TodoTaskControllerReturnType } from "../../../../controllers/TodoTaskController";
import { TodoItem } from "../TodoItem/TodoItem";
import "./todolist.css";

interface TodoListProps {
  isCompletedFilterController: IsCompletedFilterControllerReturnType;
  todoTaskController: TodoTaskControllerReturnType;
}

function TodoList({
  isCompletedFilterController,
  todoTaskController,
}: TodoListProps) {
  const { getTodoTasks } = todoTaskController;
  const todoTasks = getTodoTasks();
  const { getIsCompletedFilter } = isCompletedFilterController;
  const filter = getIsCompletedFilter();

  const listToDoItems = filterTodoTasksByIsCompleted({
    todoTasks,
    isCompleted: filter,
  });


  //Animations
  const transitions = useTransition(
    listToDoItems,
    {
      key: (item: TodoTask) => item.id,
      from: { opacity: 0, x: 0 },
      leave: { opacity: 0, x: 50 },
      enter: { opacity: 1 }, 
    }
  );

  //TodoList Animation
  const [ref, { height }] = useMeasure({ polyfill: ResizeObserver });
  const todoListTransition = useSpring({
    height: {height},
  });
  
  return (
    <animated.ul ref={ref} style={todoListTransition} role="list" className={"todo-list"}>
      {transitions((style, item) => (
        <animated.div style={style}>
          <TodoItem
            key={item.id}
            task={{
              id: item.id,
              title: item.title,
              isCompleted: item.isCompleted,
            }}
            todoTaskController={todoTaskController}
          />
        </animated.div>
      ))}
    </animated.ul>
  );
}

export default TodoList;
