import React, { useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import '../../../App.css';
import './todolist.css';
import list from '../../../assets/icons/list-icon.svg';
import checkList from '../../../assets/icons/check-list-icon.svg';

type TodoData = {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todosData?: Array<TodoData>;
}

function TodoList({ todosData = [] }: TodoListProps) {
  const [todos, setTodos] = useState([...todosData]);

  const handleCreateTodoItem = (TodoTitle: string) => {

  };

  const listToDoItems = todos.map((todo: TodoData) => {
    return (
      <TodoItem
        key={todo.id}
        task={{
          id: todo.id,
          title: todo.title,
          isCompleted: todo.isCompleted
        }}
        handleUpdateTodoItemTitle={function (newTitle: string): void {
          throw new Error('Function not implemented.');
        }}

        handleUpdateTodoItemState={function (newState: boolean): void {
          throw new Error('Function not implemented.');
        }}
        handleDeleteTodoItem={function (newState: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  }
  );

  return (
    <ul className={"todo-list"}>
      {listToDoItems}
    </ul>
  );
}

export default TodoList;
