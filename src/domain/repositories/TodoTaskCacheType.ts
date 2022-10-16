import { TodoTasks } from "../entities/TodoTask";

type TodoTaskCacheType = {
    getAllTodoTasks() : TodoTasks;
    store({todoTasks} : TodoTaskCacheParameters) : void;
    clear() : void;
}

type TodoTaskCacheParameters = {
    todoTasks: TodoTasks;
}

export {TodoTaskCacheType, TodoTaskCacheParameters}