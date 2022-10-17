import { completeAllTodoTasks, CompleteAllTodoTasksParameters, deleteTodoTask, filterTodoTasksByIsCompleted, TodoTasks } from "../../../domain/entities/TodoTask";

export function makeDeleteAllCompletedTodoTasks(): typeof completeAllTodoTasks {

    function DeleteAllCompletedTodoTasks({ todoTasks }: CompleteAllTodoTasksParameters): TodoTasks {
        const completedTodoTasks = filterTodoTasksByIsCompleted({todoTasks, isCompleted: true});
        const todoTasksIds = completedTodoTasks.map((todo) => todo.id);
        const remainingTodoTasks = todoTasksIds.reduce((resultTodoTasks, id) => {
            return deleteTodoTask({todoTasks: resultTodoTasks, id});
        }, todoTasks);
        
        return remainingTodoTasks;
    }

    return DeleteAllCompletedTodoTasks;
}