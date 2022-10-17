import { TodoTasks, updateTodoTaskTitle, UpdateTodoTaskTitleParameters } from "../../../domain/entities/TodoTask";
import { TodoTaskCacheType } from "../../../domain/repositories/TodoTaskCacheType";

export function makeUpdateTodoTaskTitle(): typeof updateTodoTaskTitle {

    function UpdateTodoTaskTitle({ todoTasks, id, newTitle }: UpdateTodoTaskTitleParameters): TodoTasks {
        const newTodosTasks = updateTodoTaskTitle({ todoTasks, id, newTitle});
        return newTodosTasks;
    }

    return UpdateTodoTaskTitle;
}