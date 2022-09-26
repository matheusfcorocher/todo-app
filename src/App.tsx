import React, { useState } from 'react';
import './App.css';
import Todo, { TodoData } from './components/Organisms/Todo/Todo';
import { v4 as uuidv4 } from 'uuid';

export type handleCreateTodo = (title: string) => void;
export type handleDeleteTodo = (id: string) => void;

function App() {
  const [todos, setTodos] = useState<Array<TodoData>>([]);

  function createTodo(title: string): void {
    const newTodo: TodoData = {
      id: uuidv4(),
      title,
      isCompleted: false
    };
    setTodos([...todos, newTodo])
  }

  function deleteTodo(id: string): void {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Todo 
        todosData={todos}
        handleCreateTodo={createTodo} 
        handleDeleteTodo={deleteTodo}      
      />
    </div>
  );
}

export default App;
