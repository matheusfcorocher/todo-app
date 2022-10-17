import React, { useState } from 'react';
import './App.css';
import Todo from './presentation/view/components/Organisms/Todo/Todo';
import { TodoTasks } from './domain/entities/TodoTask';
import { todoTaskCache } from './infra/cache/TodoTaskCache';
import { makeTodoTaskController } from './presentation/controllers/TodoTaskController';

export type HandleFilter = (isCompleted?: boolean) => void;

function App() {
  const [todoTasks, setTodoTasks] = useState<TodoTasks>(todoTaskCache.getAllTodoTasks());
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
