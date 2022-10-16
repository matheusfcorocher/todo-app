import React, { useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import './todolist.css';
import { filterTodoTasksByIsCompleted, TodoTask, TodoTasks } from '../../../../domain/entities/TodoTask';
import { TodoTaskControllerReturnType } from '../../../controllers/TodoTaskController';

interface TodoListProps {
  todoTasks?: TodoTasks;
  filter?: boolean;
  todoTaskController: TodoTaskControllerReturnType;
}

function TodoList({ todoTasks = [], filter = undefined, todoTaskController }: TodoListProps) {
  const { handleUpdateTodoTaskTitle, handleUpdateTodoTaskState, handleDeleteTodoTask } = todoTaskController;
  const listToDoItems = filterTodoTasksByIsCompleted({ todoTasks, isCompleted: filter }).map((todo: TodoTask) => {
    return (
      <TodoItem
        key={todo.id}
        task={{
          id: todo.id,
          title: todo.title,
          isCompleted: todo.isCompleted
        }}
        handleUpdateTodoItemTitle={handleUpdateTodoTaskTitle}
        handleUpdateTodoItemState={handleUpdateTodoTaskState}
        handleDeleteTodoItem={handleDeleteTodoTask}
      />
    );
  }
  );

  return (
    <ul role="list" className={"todo-list"}>
      {listToDoItems}
    </ul>
  );
}

export default TodoList;
