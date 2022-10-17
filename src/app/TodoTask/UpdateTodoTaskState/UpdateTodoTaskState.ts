import { TodoTasks, updateTodoTaskState, UpdateTodoTaskStateParameters } from "../../../domain/entities/TodoTask";
import { TodoTaskCacheType } from "../../../domain/repositories/TodoTaskCacheType";

export function makeUpdateTodoTaskState(): typeof updateTodoTaskState {

    function UpdateTodoTaskState({ todoTasks, id, state }: UpdateTodoTaskStateParameters): TodoTasks {
        const newTodosTasks = updateTodoTaskState({ todoTasks, id, state});
        return newTodosTasks;
    }

    return UpdateTodoTaskState;
}