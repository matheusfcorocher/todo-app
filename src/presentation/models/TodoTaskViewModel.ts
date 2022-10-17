import { TodoTasks } from "../../domain/entities/TodoTask";
import { isArrayEmpty } from "../../lib/isArrayEmpty/isArrayEmpty";

const todoTaskViewModel = {
    isAllTodoTasksCompleted: (todoTasks: TodoTasks): boolean => {
        const isAllTodosCompleted = todoTasks.find(todo => todo.isCompleted == true);
        if (isAllTodosCompleted) {
          return true;
        }
    
        return false;
    },
    isTodoTasksNotEmpty: (todoTasks: TodoTasks): boolean => {
        return !isArrayEmpty(todoTasks)
    },
};

export {todoTaskViewModel};