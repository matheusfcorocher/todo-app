import { filterTodoTasksByIsCompleted, TodoTasks } from "../../domain/entities/TodoTask";
import { isArrayEmpty } from "../../lib/isArrayEmpty/isArrayEmpty";

const todoTaskViewModel = {
    isThereAnyTodoTaskCompleted: (todoTasks: TodoTasks): boolean => {
        const isAllTodosCompleted = todoTasks.find(todo => todo.isCompleted == true);
        if (isAllTodosCompleted) {
            return true;
        }

        return false;
    },
    isTodoTasksNotEmpty: (todoTasks: TodoTasks): boolean => {
        return !isArrayEmpty(todoTasks)
    },
    returnOnlyActiveTodoTasks: (todoTasks: TodoTasks): TodoTasks => {
        const activeTodoTasks = filterTodoTasksByIsCompleted({ todoTasks, isCompleted: false });
        return activeTodoTasks;
    },
};

export { todoTaskViewModel };