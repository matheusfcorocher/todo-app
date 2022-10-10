import { addTodoTask, AddTodoTaskParameters, TodoTasks } from "../../domain/entities/TodoTask";

export function makeAddTodoTask(): typeof addTodoTask {
    
    
    function AddTodoTask({ todoTasks, title }: AddTodoTaskParameters): TodoTasks {
        const todosTasks = addTodoTask({ todoTasks, title });
        
        return todosTasks;
    }

    return AddTodoTask;
}