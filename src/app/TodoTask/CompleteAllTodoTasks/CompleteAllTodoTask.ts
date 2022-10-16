import { completeAllTodoTasks, CompleteAllTodoTasksParameters, TodoTasks } from "../../../domain/entities/TodoTask";
import { TodoTaskCacheType } from "../../../domain/repositories/TodoTaskCacheType";

export function makeCompleteAllTodoTasks(todoTaskRepository : TodoTaskCacheType): typeof completeAllTodoTasks {
    const storage = todoTaskRepository;

    function CompleteAllTodoTasks({ todoTasks }: CompleteAllTodoTasksParameters): TodoTasks {
        const newTodosTasks = completeAllTodoTasks({ todoTasks });
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return CompleteAllTodoTasks;
}