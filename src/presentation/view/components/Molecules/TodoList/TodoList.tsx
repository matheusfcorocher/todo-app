import React, { useState } from "react";
import {
  filterTodoTasksByIsCompleted,
  TodoTasks,
} from "../../../../../domain/entities/TodoTask";
import { IsCompletedFilterControllerReturnType } from "../../../../controllers/IsCompletedFilterController";
import { TodoTaskControllerReturnType } from "../../../../controllers/TodoTaskController";
import { TodoItem } from "../TodoItem/TodoItem";
import "./todolist.css";

interface TodoListProps {
  isCompletedFilterController: IsCompletedFilterControllerReturnType;
  todoTaskController: TodoTaskControllerReturnType;
}

function TodoList({ isCompletedFilterController, todoTaskController }: TodoListProps) {
  const { getTodoTasks } = todoTaskController;
  const todoTasks = getTodoTasks();
  const { getIsCompletedFilter } = isCompletedFilterController;
  const filter = getIsCompletedFilter();
  
  const listToDoItems = filterTodoTasksByIsCompleted({
    todoTasks,
    isCompleted: filter,
  }).map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        task={{
          id: todo.id,
          title: todo.title,
          isCompleted: todo.isCompleted,
        }}
        todoTaskController={todoTaskController}
      />
    );
  });

  return (
    <ul role="list" className={"todo-list"}>
      {listToDoItems}
    </ul>
  );
}

export default TodoList;
