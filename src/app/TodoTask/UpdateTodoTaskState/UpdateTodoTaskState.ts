import { TodoTasks, updateTodoTaskState, UpdateTodoTaskStateParameters } from "../../../domain/entities/TodoTask";
import { TodoTaskRepository } from "../../../domain/repositories/TodoTaskRepository";

export function makeUpdateTodoTaskState(todoTaskRepository : TodoTaskRepository): typeof updateTodoTaskState {
    const storage = todoTaskRepository;

    function UpdateTodoTaskState({ todoTasks, id, state }: UpdateTodoTaskStateParameters): TodoTasks {
        const newTodosTasks = updateTodoTaskState({ todoTasks, id, state});
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return UpdateTodoTaskState;
}