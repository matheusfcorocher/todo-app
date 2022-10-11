import { TodoTasks } from "../../domain/entities/TodoTask";
import { TodoTaskRepository, StoreTodoTaskParameters } from "../../domain/repositories/TodoTaskRepository";


const lsTodoTaskRepository : TodoTaskRepository  = {
    getAllTodoTasks: function (): TodoTasks {
        const todoTasks = localStorage.getItem('todoTasks');
        if (todoTasks) {
            return JSON.parse(todoTasks);
        }
        return [];
    },
    store: function ({ todoTasks }: StoreTodoTaskParameters): void {
        localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
    },
    clear: function (): void {
        localStorage.removeItem("todoTasks");
    }
}

export { lsTodoTaskRepository };
