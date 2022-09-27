import React, { useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import '../../../App.css';
import './todolist.css';
import { handleDeleteTodo, handleUpdateTodoState, handleUpdateTodoTitle } from '../../../App';

type TodoData = {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todosData?: Array<TodoData>;
  handleDeleteTodo: handleDeleteTodo;
  handleUpdateTodoTitle: handleUpdateTodoTitle;
  handleUpdateTodoState: handleUpdateTodoState;
}

function TodoList({ todosData = [], handleDeleteTodo, handleUpdateTodoTitle, handleUpdateTodoState }: TodoListProps) {
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
