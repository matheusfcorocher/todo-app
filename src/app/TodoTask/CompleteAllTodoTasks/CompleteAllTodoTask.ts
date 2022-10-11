import { completeAllTodoTasks, CompleteAllTodoTasksParameters, TodoTasks } from "../../../domain/entities/TodoTask";
import { TodoTaskRepository } from "../../../domain/repositories/TodoTaskRepository";

export function makeCompleteAllTodoTasks(todoTaskRepository : TodoTaskRepository): typeof completeAllTodoTasks {
    const storage = todoTaskRepository;

    function CompleteAllTodoTasks({ todoTasks }: CompleteAllTodoTasksParameters): TodoTasks {
        const newTodosTasks = completeAllTodoTasks({ todoTasks });
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return CompleteAllTodoTasks;
}