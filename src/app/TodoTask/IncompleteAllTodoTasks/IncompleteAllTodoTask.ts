import { incompleteAllTodoTasks, IncompleteAllTodoTasksParameters, TodoTasks } from "../../../domain/entities/TodoTask";
import { TodoTaskCacheType } from "../../../domain/repositories/TodoTaskCacheType";

export function makeIncompleteAllTodoTasks(todoTaskRepository : TodoTaskCacheType): typeof incompleteAllTodoTasks {
    const storage = todoTaskRepository;

    function IncompleteAllTodoTasks({ todoTasks }: IncompleteAllTodoTasksParameters): TodoTasks {
        const newTodosTasks = incompleteAllTodoTasks({ todoTasks });
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return IncompleteAllTodoTasks;
}