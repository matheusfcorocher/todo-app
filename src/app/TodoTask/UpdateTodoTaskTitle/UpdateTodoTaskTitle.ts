import { TodoTasks, updateTodoTaskTitle, UpdateTodoTaskTitleParameters } from "../../../domain/entities/TodoTask";
import { TodoTaskRepository } from "../../../domain/repositories/TodoTaskRepository";

export function makeUpdateTodoTaskTitle(todoTaskRepository : TodoTaskRepository): typeof updateTodoTaskTitle {
    const storage = todoTaskRepository;

    function UpdateTodoTaskTitle({ todoTasks, id, newTitle }: UpdateTodoTaskTitleParameters): TodoTasks {
        const newTodosTasks = updateTodoTaskTitle({ todoTasks, id, newTitle});
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return UpdateTodoTaskTitle;
}