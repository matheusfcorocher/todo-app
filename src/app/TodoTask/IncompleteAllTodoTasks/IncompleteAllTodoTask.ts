import { incompleteAllTodoTasks, IncompleteAllTodoTasksParameters, TodoTasks } from "../../../domain/entities/TodoTask";

export function makeIncompleteAllTodoTasks(): typeof incompleteAllTodoTasks {

    function IncompleteAllTodoTasks({ todoTasks }: IncompleteAllTodoTasksParameters): TodoTasks {
        const newTodosTasks = incompleteAllTodoTasks({ todoTasks });
        return newTodosTasks;
    }

    return IncompleteAllTodoTasks;
}