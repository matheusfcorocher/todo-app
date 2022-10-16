import { addTodoTask, AddTodoTaskParameters, TodoTasks } from "../../../domain/entities/TodoTask";
import { TodoTaskCacheType } from "../../../domain/repositories/TodoTaskCacheType";

export function makeAddTodoTask(todoTaskRepository : TodoTaskCacheType): typeof addTodoTask {
    const storage = todoTaskRepository;

    function AddTodoTask({ todoTasks, title }: AddTodoTaskParameters): TodoTasks {
        const newTodosTasks = addTodoTask({ todoTasks, title });
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return AddTodoTask;
}