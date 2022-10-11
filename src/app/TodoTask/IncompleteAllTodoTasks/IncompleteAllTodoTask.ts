import { incompleteAllTodoTasks, IncompleteAllTodoTasksParameters, TodoTasks } from "../../../domain/entities/TodoTask";
import { TodoTaskRepository } from "../../../domain/repositories/TodoTaskRepository";

export function makeIncompleteAllTodoTasks(todoTaskRepository : TodoTaskRepository): typeof incompleteAllTodoTasks {
    const storage = todoTaskRepository;

    function IncompleteAllTodoTasks({ todoTasks }: IncompleteAllTodoTasksParameters): TodoTasks {
        const newTodosTasks = incompleteAllTodoTasks({ todoTasks });
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return IncompleteAllTodoTasks;
}