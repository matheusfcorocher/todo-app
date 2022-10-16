import { TodoTasks, updateTodoTaskTitle, UpdateTodoTaskTitleParameters } from "../../../domain/entities/TodoTask";
import { TodoTaskCacheType } from "../../../domain/repositories/TodoTaskCacheType";

export function makeUpdateTodoTaskTitle(todoTaskRepository : TodoTaskCacheType): typeof updateTodoTaskTitle {
    const storage = todoTaskRepository;

    function UpdateTodoTaskTitle({ todoTasks, id, newTitle }: UpdateTodoTaskTitleParameters): TodoTasks {
        const newTodosTasks = updateTodoTaskTitle({ todoTasks, id, newTitle});
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return UpdateTodoTaskTitle;
}