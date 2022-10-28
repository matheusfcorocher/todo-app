import {
  filterTodoTasksByIsCompleted,
  TodoTasks,
} from "../../domain/entities/TodoTask";
import { isArrayEmpty } from "../../lib/isArrayEmpty/isArrayEmpty";

export type TodoTasksViewModelType = {
  isAllTodoTaskCompleted(todoTasks: TodoTasks): boolean;
  isThereAnyTodoTaskCompleted(todoTasks: TodoTasks): boolean;
  isTodoTasksNotEmpty(todoTasks: TodoTasks): boolean;
  returnOnlyActiveTodoTasks(todoTasks: TodoTasks): TodoTasks;
};

const todoTasksViewModel = {
  isAllTodoTaskCompleted: (todoTasks: TodoTasks): boolean => {
    const isAllTodosCompleted = todoTasks.filter(
      (todo) => todo.isCompleted == true
    );
    if (isAllTodosCompleted.length === todoTasks.length) {
      return true;
    }

    return false;
  },
  isThereAnyTodoTaskCompleted: (todoTasks: TodoTasks): boolean => {
    const isAllTodosCompleted = todoTasks.find(
      (todo) => todo.isCompleted == true
    );
    if (isAllTodosCompleted) {
      return true;
    }

    return false;
  },
  isTodoTasksNotEmpty: (todoTasks: TodoTasks): boolean => {
    return !isArrayEmpty(todoTasks);
  },
  returnOnlyActiveTodoTasks: (todoTasks: TodoTasks): TodoTasks => {
    const activeTodoTasks = filterTodoTasksByIsCompleted({
      todoTasks,
      isCompleted: false,
    });
    return activeTodoTasks;
  },
};

export { todoTasksViewModel };
