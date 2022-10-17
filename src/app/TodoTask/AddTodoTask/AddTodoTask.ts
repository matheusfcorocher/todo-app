import { addTodoTask, AddTodoTaskParameters, TodoTasks } from "../../../domain/entities/TodoTask";

export function makeAddTodoTask(): typeof addTodoTask {

    function AddTodoTask({ todoTasks, title }: AddTodoTaskParameters): TodoTasks {
        const newTodosTasks = addTodoTask({ todoTasks, title });
        return newTodosTasks;
    }

    return AddTodoTask;
}