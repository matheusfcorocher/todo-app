import { TodoTasks } from "../../domain/entities/TodoTask";
import { addTodoTask } from "../container";

type UpdateTodoTaskFunction = (...args: any[]) => any;


type TodoTaskControllerType = {
    todoTasks: TodoTasks;
    updateTodoTasks: UpdateTodoTaskFunction;
}

export function makeTodoTaskController({ todoTasks, updateTodoTasks }: TodoTaskControllerType) {
    return {
        handleAddTodoTask: (title: string): void => {
            const newTodoTasks = addTodoTask({ todoTasks, title });
            updateTodoTasks(newTodoTasks);
        },
    }
}