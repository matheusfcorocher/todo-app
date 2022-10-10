import { addTodoTask, AddTodoTaskParameters, TodoTasks } from "../../domain/entities/TodoTask";

type MakeAddTodoTaskParameters = {
    storage: ;
}

export function makeAddTodoTask({storage} : MakeAddTodoTaskParameters ): typeof addTodoTask {

    function AddTodoTask({ todoTasks, title }: AddTodoTaskParameters): TodoTasks {
        const newTodosTasks = addTodoTask({ todoTasks, title });
        storage.store({todoTasks: newTodosTasks});
        return newTodosTasks;
    }

    return AddTodoTask;
}