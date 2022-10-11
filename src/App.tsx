import React, { useState } from 'react';
import './App.css';
import Todo from './view/components/Organisms/Todo/Todo';
import { completeAllTodoTasks, incompleteAllTodoTasks, TodoTasks } from './domain/entities/TodoTask';
import { lsTodoTaskRepository } from './infra/repositories/LSTodoTaskRepository';
import { makeAddTodoTask } from './app/TodoTask/AddTodoTask/AddTodoTask';
import { makeDeleteTodoTask } from './app/TodoTask/DeleteTodoTask/DeleteTodoTask';
import { makeUpdateTodoTaskTitle } from './app/TodoTask/UpdateTodoTaskTitle/UpdateTodoTaskTitle';
import { makeUpdateTodoTaskState } from './app/TodoTask/UpdateTodoTaskState/UpdateTodoTaskState';
import { makeCompleteAllTodoTasks } from './app/TodoTask/CompleteAllTodoTasks/CompleteAllTodoTask';

export type HandleCreateTodo = (title: string) => void;
export type HandleDeleteTodo = (id: string) => void;
export type HandleUpdateTodoTitle = (id: string, title: string) => void;
export type HandleUpdateTodoState = (id: string, state: boolean) => void;
export type HandleCompleteTodoItems = () => void;
export type HandleIncompleteTodoItems = () => void;

function App() {
  const [todoTasks, setTodoTasks] = useState<TodoTasks>([]);

  function handleAddTodo(title: string): void {
    const addTodoTask = makeAddTodoTask(lsTodoTaskRepository);
    const newTodoTasks = addTodoTask({todoTasks, title});
    setTodoTasks(newTodoTasks)
  }

  function handleDeleteTodo(id: string): void {
    const deleteTodoTask = makeDeleteTodoTask(lsTodoTaskRepository);
    const newTodoTasks = deleteTodoTask({todoTasks, id});
    setTodoTasks(newTodoTasks);
  }

  function handleUpdateTodoTitle(id: string, newTitle: string): void {
    const updateTodoTaskTitle = makeUpdateTodoTaskTitle(lsTodoTaskRepository);
    const newTodoTasks = updateTodoTaskTitle({todoTasks, id, newTitle});
    setTodoTasks(newTodoTasks);
  }

  function handleUpdateTodoState(id: string, state: boolean): void {
    const updateTodoTaskState = makeUpdateTodoTaskState(lsTodoTaskRepository);
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
    const completeAllTodoTasks = makeCompleteAllTodoTasks(lsTodoTaskRepository);
    const newTodoTasks = completeAllTodoTasks({todoTasks});
    setTodoTasks(newTodoTasks);
  }

  function handleIncompleteAllTodoTasks(): void {
    const newTodoTasks = incompleteAllTodoTasks({todoTasks});
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
        handleIncompleteAllTodoItems={handleIncompleteAllTodoTasks}
      />
    </div>
  );
}

export default App;
