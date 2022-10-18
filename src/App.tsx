import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './presentation/view/components/Organisms/Todo/Todo';
import { TodoTasks } from './domain/entities/TodoTask';
import { todoTaskCache } from './infra/cache/TodoTaskCache';
import { makeTodoTaskController } from './presentation/controllers/TodoTaskController';
import { filterViewModel } from './presentation/models/FilterViewModel';
import { useUrlHash } from 'use-url-hash';

export type HandleFilter = (isCompleted?: boolean) => void;

function App() {
  const [todoTasks, setTodoTasks] = useState<TodoTasks>(todoTaskCache.getAllTodoTasks());
  const todoTaskController = makeTodoTaskController(
    {
      todoTasks,
      updateTodoTasks: setTodoTasks,
      localStorage: todoTaskCache
    }
  );

  const hash = useUrlHash();
  const [filter, setFilter] = useState<boolean | undefined>(
    filterViewModel.getFilterByUrlHash(hash)
  );
  useEffect(() => {
    setFilter(filterViewModel.getFilterByUrlHash(hash));
  }, [hash]);

  function handleFilter(isCompleted?: boolean): void {
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
