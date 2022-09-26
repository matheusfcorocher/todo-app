import React, { useState } from 'react';
import './App.css';
import Todo, { TodoData } from './components/Organisms/Todo/Todo';
import { v4 as uuidv4 } from 'uuid';

export type handleCreateTodo = (title: string) => void;
export type handleDeleteTodo = (id: string) => void;
export type handleUpdateTodoTitle = (id: string, title: string) => void;

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

  function updateTodoTitle(id: string, newTitle: string): void {
    if(newTitle.length === 0) {
      deleteTodo(id);
    } else {
      const oldTodo = todos.find((todo) => todo.id === id);
      if(oldTodo) {
        const index = todos.findIndex((todo) => todo.id === id);
        const newTodo : TodoData = {...oldTodo, title: newTitle};
        const newTodos = [...todos.slice(0, index), newTodo, ...todos.slice(index+1)];
        setTodos(newTodos);
      }
    }
  }

  return (
    <div className="App">
      <Todo 
        todosData={todos}
        handleCreateTodo={createTodo} 
        handleDeleteTodo={deleteTodo}      
        handleUpdateTodoTitle={updateTodoTitle}      
      />
    </div>
  );
}

export default App;
