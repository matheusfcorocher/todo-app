import React, { useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import './todolist.css';
import { HandleDeleteTodo, HandleUpdateTodoState, HandleUpdateTodoTitle } from '../../../../App';
import { TodoTask, TodoTasks } from '../../../../domain/entities/TodoTask';

interface TodoListProps {
  todoTasks?: TodoTasks;
  handleDeleteTodo: HandleDeleteTodo;
  handleUpdateTodoTitle: HandleUpdateTodoTitle;
  handleUpdateTodoState: HandleUpdateTodoState;
}

function TodoList({ todoTasks = [], handleDeleteTodo, handleUpdateTodoTitle, handleUpdateTodoState }: TodoListProps) {
  const listToDoItems = todoTasks.map((todo: TodoTask) => {
    return (
      <TodoItem
        key={todo.id}
        task={{
          id: todo.id,
          title: todo.title,
          isCompleted: todo.isCompleted
        }}
        handleUpdateTodoItemTitle={handleUpdateTodoTitle}
        handleUpdateTodoItemState={handleUpdateTodoState}
        handleDeleteTodoItem={handleDeleteTodo}
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
