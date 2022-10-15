import { TodoTasks } from "../../domain/entities/TodoTask";
import { addTodoTask, completeAllTodoTasks, deleteAllCompletedTodoTasks, deleteTodoTask, incompleteAllTodoTasks, updateTodoTaskState, updateTodoTaskTitle } from "../container";

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
        handleDeleteTodoTask(id: string): void {
            const newTodoTasks = deleteTodoTask({todoTasks, id});
            updateTodoTasks(newTodoTasks);
        },
        handleUpdateTodoTaskTitle(id: string, newTitle: string): void {
            const newTodoTasks = updateTodoTaskTitle({todoTasks, id, newTitle});
            updateTodoTasks(newTodoTasks);
        },
        handleUpdateTodoTaskState(id: string, state: boolean): void {
            const newTodoTasks = updateTodoTaskState({todoTasks, id, state});
            updateTodoTasks(newTodoTasks);
        },
        handleCompleteAllTodoTasks(): void {
            const newTodoTasks = completeAllTodoTasks({todoTasks});
            updateTodoTasks(newTodoTasks);
        },
        handleIncompleteAllTodoTasks(): void {
            const newTodoTasks = incompleteAllTodoTasks({todoTasks});
            updateTodoTasks(newTodoTasks);
        },
        handleDeleteAllCompletedTodoTasks(): void {
            const newTodoTasks = deleteAllCompletedTodoTasks({todoTasks});
            updateTodoTasks(newTodoTasks);
        }
    }
}