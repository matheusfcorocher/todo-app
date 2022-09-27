import React, { useState } from 'react';
import './App.css';
import Todo, { TodoData } from './components/Organisms/Todo/Todo';
import { v4 as uuidv4 } from 'uuid';

export type handleCreateTodo = (title: string) => void;
export type handleDeleteTodo = (id: string) => void;
export type handleUpdateTodoTitle = (id: string, title: string) => void;
export type handleUpdateTodoState = (id: string, state: boolean) => void;
export type handleCompleteTodoItems = () => void;
export type handleIncompleteTodoItems = () => void;

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
    if (isTodoTitleBlank(newTitle)) {
      deleteTodo(id);
    } else {
      const oldTodo = todos.find((todo) => todo.id === id);
      if (oldTodo) {
        const index = todos.findIndex((todo) => todo.id === id);
        const newTodo: TodoData = { ...oldTodo, title: newTitle };
        const newTodos = [...todos.slice(0, index), newTodo, ...todos.slice(index + 1)];
        setTodos(newTodos);
      }
    }
  }

  function updateTodoState(id: string, state: boolean): void {
    const oldTodo = todos.find((todo) => todo.id === id);
    if (oldTodo) {
      const index = todos.findIndex((todo) => todo.id === id);
      const newTodo: TodoData = { ...oldTodo, isCompleted: state };
      const newTodos = [...todos.slice(0, index), newTodo, ...todos.slice(index + 1)];
      setTodos(newTodos);
    }
  }

  function isTodoTitleBlank(title: string): boolean {
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

  function completeAllTodosItem(): void {
    const newTodos = todos.map(todo => {
      return {
        ...todo,
        isCompleted: true
      }
    });
    setTodos(newTodos);
  }

  function incompleteAllTodosItem(): void {
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
        handleCreateTodo={createTodo}
        handleDeleteTodo={deleteTodo}
        handleUpdateTodoTitle={updateTodoTitle}
        handleUpdateTodoState={updateTodoState}
        handleCompleteAllTodoItems={completeAllTodosItem}
        handleIncompleteAllTodoItems={incompleteAllTodosItem}
      />
    </div>
  );
}

export default App;
