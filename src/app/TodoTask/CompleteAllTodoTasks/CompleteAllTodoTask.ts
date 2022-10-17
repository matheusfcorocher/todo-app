import { completeAllTodoTasks, CompleteAllTodoTasksParameters, TodoTasks } from "../../../domain/entities/TodoTask";

export function makeCompleteAllTodoTasks(): typeof completeAllTodoTasks {

    function CompleteAllTodoTasks({ todoTasks }: CompleteAllTodoTasksParameters): TodoTasks {
        const newTodosTasks = completeAllTodoTasks({ todoTasks });
        return newTodosTasks;
    }

    return CompleteAllTodoTasks;
}