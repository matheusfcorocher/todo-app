import { TodoTasks } from "../entities/TodoTask";

type LSTodoTaskRepositoryFactory = {
    get() : TodoTasks;
    store({todoTasks} : StoreTodoTaskParameters) : void;
    clear() : void;
}

type StoreTodoTaskParameters = {
    todoTasks: TodoTasks;
}

export {LSTodoTaskRepositoryFactory, StoreTodoTaskParameters}