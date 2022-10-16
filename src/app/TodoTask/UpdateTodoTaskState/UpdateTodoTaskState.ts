import { TodoTasks, updateTodoTaskState, UpdateTodoTaskStateParameters } from "../../../domain/entities/TodoTask";
import { TodoTaskCacheType } from "../../../domain/repositories/TodoTaskCacheType";

export function makeUpdateTodoTaskState(todoTaskRepository : TodoTaskCacheType): typeof updateTodoTaskState {
    const storage = todoTaskRepository;

    function UpdateTodoTaskState({ todoTasks, id, state }: UpdateTodoTaskStateParameters): TodoTasks {
        const newTodosTasks = updateTodoTaskState({ todoTasks, id, state});
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return UpdateTodoTaskState;
}