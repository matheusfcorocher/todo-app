import React, { useState } from 'react';
import './App.css';
import Todo from './view/components/Organisms/Todo/Todo';
import { addTodoTask, completeAllTodoTasksItem, deleteTodoTask, incompleteAllTodoTasksItem, TodoTask, TodoTasks, updateTodoTaskState, updateTodoTaskTitle } from './domain/entities/TodoTask';

export type HandleCreateTodo = (title: string) => void;
export type HandleDeleteTodo = (id: string) => void;
export type HandleUpdateTodoTitle = (id: string, title: string) => void;
export type HandleUpdateTodoState = (id: string, state: boolean) => void;
export type HandleCompleteTodoItems = () => void;
export type HandleIncompleteTodoItems = () => void;

function App() {
  const [todoTasks, setTodoTasks] = useState<TodoTasks>([]);

  function handleAddTodo(title: string): void {
    const newTodoTasks = addTodoTask({todoTasks, title});
    setTodoTasks(newTodoTasks)
  }

  function handleDeleteTodo(id: string): void {
    const newTodoTasks = deleteTodoTask({todoTasks, id});
    setTodoTasks(newTodoTasks);
  }

  function handleUpdateTodoTitle(id: string, newTitle: string): void {
    const newTodoTasks = updateTodoTaskTitle({todoTasks, id, newTitle});
    setTodoTasks(newTodoTasks);
  }

  function handleUpdateTodoState(id: string, state: boolean): void {
    const newTodoTasks = updateTodoTaskState({todoTasks, id, state});
    setTodoTasks(newTodoTasks);
  }

  // function deleteTodoWhenIsBlank(id: string, title: string) : void {
  //   const isBlank = isTodoTitleBlank(title);
  //   if(isBlank) {
  //     deleteTodo(id);
  //   }
  // } 

  function handleCompleteAllTodoTasksItem(): void {
    const newTodoTasks = completeAllTodoTasksItem({todoTasks});
    setTodoTasks(newTodoTasks);
  }

  function handleIncompleteAllTodoTasksItem(): void {
    const newTodoTasks = incompleteAllTodoTasksItem({todoTasks});
    setTodoTasks(newTodoTasks);
  }

  return (
    <div className="App">
      <Todo
        todoTasks={todoTasks}
        handleCreateTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodoTitle={handleUpdateTodoTitle}
        handleUpdateTodoState={handleUpdateTodoState}
        handleCompleteAllTodoItems={handleCompleteAllTodoTasksItem}
        handleIncompleteAllTodoItems={handleIncompleteAllTodoTasksItem}
      />
    </div>
  );
}

export default App;
