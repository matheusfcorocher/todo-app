import { TodoTasks } from "../../domain/entities/TodoTask";
import { LSTodoTaskRepositoryFactory, StoreTodoTaskParameters } from "../../domain/factories/LSTodoTaskRepositoryFactory";


const todoTaskRepository : LSTodoTaskRepositoryFactory = {
    get: function (): TodoTasks {
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
};

export { todoTaskRepository };
