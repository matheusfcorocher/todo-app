import { deleteTodoTask, DeleteTodoTaskParameters, TodoTasks } from "../../../domain/entities/TodoTask";
import { TodoTaskCacheType } from "../../../domain/repositories/TodoTaskCacheType";

export function makeDeleteTodoTask(todoTaskRepository : TodoTaskCacheType): typeof deleteTodoTask {
    const storage = todoTaskRepository;

    function DeleteTodoTask({ todoTasks, id }: DeleteTodoTaskParameters): TodoTasks {
        const newTodosTasks = deleteTodoTask({ todoTasks, id});
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return DeleteTodoTask;
}