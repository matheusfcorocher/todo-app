import React, { useState } from 'react';
import './App.css';
import Todo from './view/components/Organisms/Todo/Todo';
import { TodoTasks } from './domain/entities/TodoTask';
import { lsTodoTaskRepository } from './infra/repositories/LSTodoTaskRepository';
import { addTodoTask, completeAllTodoTasks, deleteAllCompletedTodoTasks, deleteTodoTask, incompleteAllTodoTasks, updateTodoTaskState, updateTodoTaskTitle } from './view/container';
import { makeTodoTaskController } from './view/controllers/TodoTaskController';

export type HandleCreateTodo = (title: string) => void;
export type HandleDeleteTodo = (id: string) => void;
export type HandleUpdateTodoTitle = (id: string, title: string) => void;
export type HandleUpdateTodoState = (id: string, state: boolean) => void;
export type HandleCompleteTodoItems = () => void;
export type HandleIncompleteTodoItems = () => void;
export type HandleFilter = (isCompleted?: boolean) => void;
export type HandleDeleteAllCompletedTodoTasks = () => void;

function App() {
  const [todoTasks, setTodoTasks] = useState<TodoTasks>(lsTodoTaskRepository.getAllTodoTasks());
  const [filter, setFilter] = useState<boolean | undefined>();

  // const todoTaskController = makeTodoTaskController({todoTasks, updateTodoTasks: setTodoTasks})
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
    const newTodoTasks = completeAllTodoTasks({todoTasks});
    setTodoTasks(newTodoTasks);
  }

  function handleIncompleteAllTodoTasks(): void {
    const newTodoTasks = incompleteAllTodoTasks({todoTasks});
    setTodoTasks(newTodoTasks);
  }

  function handleFilter(isCompleted?: boolean) : void {
    setFilter(isCompleted);
  }

  function handleDeleteAllCompletedTodoTasks(): void {
    const newTodoTasks = deleteAllCompletedTodoTasks({todoTasks});
    setTodoTasks(newTodoTasks)
  }



  return (
    <div className="App">
      <Todo
        todoTasks={todoTasks}
        filter={filter}
        handleCreateTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodoTitle={handleUpdateTodoTitle}
        handleUpdateTodoState={handleUpdateTodoState}
        handleCompleteAllTodoItems={handleCompleteAllTodoTasksItem}
        handleIncompleteAllTodoItems={handleIncompleteAllTodoTasks}
        handleFilter={handleFilter}
        handleDeleteAllCompletedTodoTasks={handleDeleteAllCompletedTodoTasks}
      />
    </div>
  );
}

export default App;
