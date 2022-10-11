import React, { useState } from 'react';
import './App.css';
import Todo from './view/components/Organisms/Todo/Todo';
import { completeAllTodoTasks, deleteTodoTask, incompleteAllTodoTasks, TodoTasks, updateTodoTaskState, updateTodoTaskTitle } from './domain/entities/TodoTask';
import { makeAddTodoTask } from './app/TodoTask/AddTodoTask';
import { lsTodoTaskRepository } from './infra/repositories/LSTodoTaskRepository';

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
