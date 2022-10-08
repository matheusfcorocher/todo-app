import React, { useState } from 'react';
import './App.css';
import { addTodo, completeAllTodosItem, deleteTodo, incompleteAllTodosItem, TodoData, Todos, updateTodoState, updateTodoTitle } from './domain/entities/TodoData';
import TodoView from './view/components/Organisms/TodoView/TodoView';

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
    const newTodos = updateTodoState({todos, id, state});
    setTodos(newTodos);
  }

  // function deleteTodoWhenIsBlank(id: string, title: string) : void {
  //   const isBlank = isTodoTitleBlank(title);
  //   if(isBlank) {
  //     deleteTodo(id);
  //   }
  // } 

  function handleCompleteAllTodosItem(): void {
    const newTodos = completeAllTodosItem({todos});
    setTodos(newTodos);
  }

  function handleIncompleteAllTodosItem(): void {
    const newTodos = incompleteAllTodosItem({todos});
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <TodoView
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
