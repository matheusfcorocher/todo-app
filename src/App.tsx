import React, { useState } from 'react';
import './App.css';
import Todo, { TodoData } from './components/Organisms/Todo/Todo';
import { v4 as uuidv4 } from 'uuid';

export type handleCreateTodo = (title: string) => void;

function App() {
  const [todos, setTodos] = useState<Array<TodoData>>([]);

  function createTodos(title: string): void {
    const newTodo: TodoData = {
      id: uuidv4(),
      title,
      isCompleted: false
    };
    setTodos([...todos, newTodo])
  }

  return (
    <div className="App">
      <Todo 
        todosData={todos} 
        handleCreateTodo={createTodos}
      />
    </div>
  );
}

export default App;
