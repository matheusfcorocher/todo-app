import { animated, useTransition } from "@react-spring/web";
import React, { useState } from "react";
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
  
  return (
    <ul role="list" className={"todo-list"}>
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
    </ul>
  );
}

export default TodoList;
