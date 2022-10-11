import { TodoTasks } from "../entities/TodoTask";

type TodoTaskRepository = {
    getAllTodoTasks() : TodoTasks;
    store({todoTasks} : StoreTodoTaskParameters) : void;
    clear() : void;
}

type StoreTodoTaskParameters = {
    todoTasks: TodoTasks;
}

export {TodoTaskRepository, StoreTodoTaskParameters}