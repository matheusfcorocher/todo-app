import React, { useState } from 'react';
import './App.css';
import Todo from './components/Organisms/Todo/Todo';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, deleteTodo, TodoData, Todos, updateTodoTitle } from './domain/entities/TodoData';

export type HandleCreateTodo = (title: string) => void;
export type HandleDeleteTodo = (id: string) => void;
export type HandleUpdateTodoTitle = (id: string, title: string) => void;
export type HandleUpdateTodoState = (id: string, state: boolean) => void;
export type HandleCompleteTodoItems = () => void;
export type HandleIncompleteTodoItems = () => void;

function App() {
  const [todos, setTodos] = useState<Todos>([]);

  function handleAddTodo(title: string): void {
    const newTodos = addTodo({todos, title});
    setTodos(newTodos)
  }

  function handleDeleteTodo(id: string): void {
    const newTodos = deleteTodo({todos, id});
    setTodos(newTodos);
  }

  function handleUpdateTodoTitle(id: string, newTitle: string): void {
    const newTodos = updateTodoTitle({todos, id, newTitle});
    setTodos(newTodos);
  }

  function handleUpdateTodoState(id: string, state: boolean): void {
    const oldTodo = todos.find((todo) => todo.id === id);
    if (oldTodo) {
      const index = todos.findIndex((todo) => todo.id === id);
      const newTodo: TodoData = { ...oldTodo, isCompleted: state };
      const newTodos = [...todos.slice(0, index), newTodo, ...todos.slice(index + 1)];
      setTodos(newTodos);
    }
  }

  function handleIsTodoTitleBlank(title: string): boolean {
    if (title.trim().length === 0) {
      return true
    }

    return false;
  }

  // function deleteTodoWhenIsBlank(id: string, title: string) : void {
  //   const isBlank = isTodoTitleBlank(title);
  //   if(isBlank) {
  //     deleteTodo(id);
  //   }
  // } 

  function handleCompleteAllTodosItem(): void {
    const newTodos = todos.map(todo => {
      return {
        ...todo,
        isCompleted: true
      }
    });
    setTodos(newTodos);
  }

  function handleIncompleteAllTodosItem(): void {
    const newTodos = todos.map(todo => {
      return {
        ...todo,
        isCompleted: false
      }
    });
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Todo
        todosData={todos}
        handleCreateTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodoTitle={handleUpdateTodoTitle}
        handleUpdateTodoState={handleUpdateTodoState}
        handleCompleteAllTodoItems={handleCompleteAllTodosItem}
        handleIncompleteAllTodoItems={handleIncompleteAllTodosItem}
      />
    </div>
  );
}

export default App;
