import React, { useState } from "react";
import {
  filterTodoTasksByIsCompleted,
  TodoTasks,
} from "../../../../../domain/entities/TodoTask";
import { TodoTaskControllerReturnType } from "../../../../controllers/TodoTaskController";
import { TodoItem } from "../TodoItem/TodoItem";
import "./todolist.css";

interface TodoListProps {
  filter?: boolean;
  todoTaskController: TodoTaskControllerReturnType;
}

function TodoList({ filter = undefined, todoTaskController }: TodoListProps) {
  const { getTodoTasks } = todoTaskController;
  const todoTasks = getTodoTasks();
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
