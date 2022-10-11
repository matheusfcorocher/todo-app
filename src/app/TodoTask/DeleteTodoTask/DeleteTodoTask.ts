import { deleteTodoTask, DeleteTodoTaskParameters, TodoTasks } from "../../../domain/entities/TodoTask";
import { TodoTaskRepository } from "../../../domain/repositories/TodoTaskRepository";

export function makeDeleteTodoTask(todoTaskRepository : TodoTaskRepository): typeof deleteTodoTask {
    const storage = todoTaskRepository;

    function DeleteTodoTask({ todoTasks, id }: DeleteTodoTaskParameters): TodoTasks {
        const newTodosTasks = deleteTodoTask({ todoTasks, id});
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return DeleteTodoTask;
}