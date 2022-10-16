import React, { useState } from 'react';
import './App.css';
import Todo from './view/components/Organisms/Todo/Todo';
import { TodoTasks } from './domain/entities/TodoTask';
import { lsTodoTaskRepository } from './infra/repositories/LSTodoTaskRepository';
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

  const todoTaskController = makeTodoTaskController({todoTasks, updateTodoTasks: setTodoTasks})

  // function deleteTodoWhenIsBlank(id: string, title: string) : void {
  //   const isBlank = isTodoTitleBlank(title);
  //   if(isBlank) {
  //     deleteTodo(id);
  //   }
  // } 

  function handleFilter(isCompleted?: boolean) : void {
    setFilter(isCompleted);
  }

  return (
    <div className="App">
      <Todo
        todoTasks={todoTasks}
        filter={filter}
        todoTaskController={todoTaskController}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
