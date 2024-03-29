import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './presentation/view/components/Organisms/Todo/Todo';
import { TodoTasks } from './domain/entities/TodoTask';
import { todoTaskCache } from './infra/cache/TodoTaskCache';
import { todoTasksViewModel } from "./presentation/models/TodoTaskViewModel";
import { makeTodoTaskController } from './presentation/controllers/TodoTaskController';
import { filterViewModel } from './presentation/models/FilterViewModel';
import { useUrlHash } from 'use-url-hash';
import { makeIsCompletedFilterController } from './presentation/controllers/IsCompletedFilterController';
import { useIsCompletedFilter } from './presentation/hooks/useIsCompletedFilter';

function App() {
  const [todoTasks, setTodoTasks] = useState<TodoTasks>(todoTaskCache.getAllTodoTasks());
  const todoTaskController = makeTodoTaskController(
    {
      todoTasks,
      updateTodoTasks: setTodoTasks,
      localStorage: todoTaskCache,
      todoTasksViewModel
    }
  );

  const hash = useUrlHash();
  const {filter, setFilter} = useIsCompletedFilter({hash, isCompletedFilterViewModel: filterViewModel});

  const isCompletedFilterController = makeIsCompletedFilterController(
    {
      isCompletedfilter: filter,
      updateIsCompletedFilter: setFilter,
      isCompletedFilterViewModel: filterViewModel
    }
  );

  return (
    <div className="App">
      <Todo
        todoTaskController={todoTaskController}
        isCompletedFilterController={isCompletedFilterController}
      />
    </div>
  );
}

export default App;
