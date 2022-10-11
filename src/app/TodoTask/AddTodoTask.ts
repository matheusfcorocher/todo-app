import { addTodoTask, AddTodoTaskParameters, TodoTasks } from "../../domain/entities/TodoTask";
import { TodoTaskRepository } from "../../domain/repositories/TodoTaskRepository";

export function makeAddTodoTask(todoTaskRepository : TodoTaskRepository): typeof addTodoTask {
    const storage = todoTaskRepository;

    function AddTodoTask({ todoTasks, title }: AddTodoTaskParameters): TodoTasks {
        const newTodosTasks = addTodoTask({ todoTasks, title });
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return AddTodoTask;
}