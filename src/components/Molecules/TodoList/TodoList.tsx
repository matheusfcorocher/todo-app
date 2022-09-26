import React, { useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import '../../../App.css';
import './todolist.css';
import { handleDeleteTodo, handleUpdateTodoTitle } from '../../../App';

type TodoData = {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todosData?: Array<TodoData>;
  handleDeleteTodo: handleDeleteTodo;
  handleUpdateTodoTitle: handleUpdateTodoTitle;
}

function TodoList({ todosData = [], handleDeleteTodo, handleUpdateTodoTitle}: TodoListProps) {
  const listToDoItems = todosData.map((todo: TodoData) => {
    return (
      <TodoItem
        key={todo.id}
        task={{
          id: todo.id,
          title: todo.title,
          isCompleted: todo.isCompleted
        }}
        handleUpdateTodoItemTitle={handleUpdateTodoTitle}
        handleUpdateTodoItemState={function (newState: boolean): void {
          throw new Error('Function not implemented.');
        }}
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
