import { TodoTasks } from "../../domain/entities/TodoTask";
import { TodoTaskCacheParameters, TodoTaskCacheType } from "../../domain/repositories/TodoTaskCacheType";


const todoTaskCache : TodoTaskCacheType  = {
    getAllTodoTasks: function (): TodoTasks {
        const todoTasks = localStorage.getItem('todoTasks');
        if (todoTasks) {
            return JSON.parse(todoTasks);
        }
        return [];
    },
    store: function ({ todoTasks }: TodoTaskCacheParameters): void {
        localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
    },
    clear: function (): void {
        localStorage.removeItem("todoTasks");
    }
}

export { todoTaskCache };
