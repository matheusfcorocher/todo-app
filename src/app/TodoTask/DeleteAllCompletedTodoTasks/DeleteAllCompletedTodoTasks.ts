import { completeAllTodoTasks, CompleteAllTodoTasksParameters, deleteTodoTask, filterTodoTasksByIsCompleted, TodoTasks } from "../../../domain/entities/TodoTask";
import { TodoTaskCacheType } from "../../../domain/repositories/TodoTaskCacheType";

export function makeDeleteAllCompletedTodoTasks(todoTaskRepository : TodoTaskCacheType): typeof completeAllTodoTasks {
    const storage = todoTaskRepository;

    function DeleteAllCompletedTodoTasks({ todoTasks }: CompleteAllTodoTasksParameters): TodoTasks {
        const completedTodoTasks = filterTodoTasksByIsCompleted({todoTasks, isCompleted: true});
        const todoTasksIds = completedTodoTasks.map((todo) => todo.id);
        const remainingTodoTasks = todoTasksIds.reduce((resultTodoTasks, id) => {
            return deleteTodoTask({todoTasks: resultTodoTasks, id});
        }, todoTasks);

        storage.store({todoTasks: remainingTodoTasks});
        
        return remainingTodoTasks;
    }

    return DeleteAllCompletedTodoTasks;
}