import React, { useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import '../../App.css';
import './todolist.css';

type TodoData = {
  id: string;
  title: string;
  isCompleted: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleCreateTodoItem = (TodoTitle: string) => {

  };

  const listToDoItems = todos.map((todo: TodoData) => 
    <TodoItem 
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

  return (
    <div className={"todo-list"}>
      <div className={`todo-panel`}>
        <button>Complete All</button>
        <input 
          type="text"
          role="textbox"
          placeholder='What needs to be done?'
          value={''}
          name="title"
          className={`title-input`}
          onChange={() => handleCreateTodoItem}
        />
      </div>
      <ul>
        {listToDoItems}
      </ul>
    </div>
  );
}

export default TodoList;
