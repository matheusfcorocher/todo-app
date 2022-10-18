import { TodoTasks } from "../../domain/entities/TodoTask";
import { TodoTaskCacheType } from "../../domain/repositories/TodoTaskCacheType";
import { addTodoTask, completeAllTodoTasks, deleteAllCompletedTodoTasks, deleteTodoTask, incompleteAllTodoTasks, updateTodoTaskState, updateTodoTaskTitle } from "./container";

type UpdateTodoTaskFunction = (...args: any[]) => any;

export type TodoTaskControllerType = {
    todoTasks: TodoTasks;
    updateTodoTasks: UpdateTodoTaskFunction;
    localStorage: TodoTaskCacheType;
}

export type TodoTaskControllerReturnType = {
    handleAddTodoTask(title: string): void;
    handleDeleteTodoTask(id: string): void;
    handleUpdateTodoTaskTitle(id: string, newTitle: string): void;
    handleUpdateTodoTaskState(id: string, state: boolean): void;
    handleCompleteAllTodoTasks(): void;
    handleIncompleteAllTodoTasks(): void;
    handleDeleteAllCompletedTodoTasks(): void;
}

export function makeTodoTaskController({ todoTasks, updateTodoTasks, localStorage }: TodoTaskControllerType): TodoTaskControllerReturnType {
    return {
        handleAddTodoTask: (title: string): void => {
            const newTodoTasks = addTodoTask({ todoTasks, title });
            localStorage.store({ todoTasks: newTodoTasks });
            updateTodoTasks(newTodoTasks);
        },
        handleDeleteTodoTask(id: string): void {
            const newTodoTasks = deleteTodoTask({ todoTasks, id });
            localStorage.store({ todoTasks: newTodoTasks });
            updateTodoTasks(newTodoTasks);
        },
        handleUpdateTodoTaskTitle(id: string, newTitle: string): void {
            const newTodoTasks = updateTodoTaskTitle({ todoTasks, id, newTitle });
            localStorage.store({ todoTasks: newTodoTasks });
            updateTodoTasks(newTodoTasks);
        },
        handleUpdateTodoTaskState(id: string, state: boolean): void {
            const newTodoTasks = updateTodoTaskState({ todoTasks, id, state });
            localStorage.store({ todoTasks: newTodoTasks });
            updateTodoTasks(newTodoTasks);
        },
        handleCompleteAllTodoTasks: (): void => {
            const newTodoTasks = completeAllTodoTasks({ todoTasks });
            localStorage.store({ todoTasks: newTodoTasks });
            updateTodoTasks(newTodoTasks);
        },
        handleIncompleteAllTodoTasks(): void {
            const newTodoTasks = incompleteAllTodoTasks({ todoTasks });
            localStorage.store({ todoTasks: newTodoTasks });
            updateTodoTasks(newTodoTasks);
        },
        handleDeleteAllCompletedTodoTasks(): void {
            const newTodoTasks = deleteAllCompletedTodoTasks({ todoTasks });
            localStorage.store({ todoTasks: newTodoTasks });
            updateTodoTasks(newTodoTasks);
        }
    }
}