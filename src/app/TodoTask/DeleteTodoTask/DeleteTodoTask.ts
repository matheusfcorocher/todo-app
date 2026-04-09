import { deleteTodoTask, DeleteTodoTaskParameters, TodoTasks } from "../../../domain/entities/TodoTask";

export function makeDeleteTodoTask(): typeof deleteTodoTask {

    function DeleteTodoTask({ todoTasks, id }: DeleteTodoTaskParameters): TodoTasks {
        const newTodosTasks = deleteTodoTask({ todoTasks, id});
        return newTodosTasks;
    }

    return DeleteTodoTask;
}