import { makeAddTodoTask } from "../../app/TodoTask/AddTodoTask/AddTodoTask";
import { makeCompleteAllTodoTasks } from "../../app/TodoTask/CompleteAllTodoTasks/CompleteAllTodoTask";
import { makeDeleteAllCompletedTodoTasks } from "../../app/TodoTask/DeleteAllCompletedTodoTasks/DeleteAllCompletedTodoTasks";
import { makeDeleteTodoTask } from "../../app/TodoTask/DeleteTodoTask/DeleteTodoTask";
import { makeIncompleteAllTodoTasks } from "../../app/TodoTask/IncompleteAllTodoTasks/IncompleteAllTodoTask";
import { makeUpdateTodoTaskState } from "../../app/TodoTask/UpdateTodoTaskState/UpdateTodoTaskState";
import { makeUpdateTodoTaskTitle } from "../../app/TodoTask/UpdateTodoTaskTitle/UpdateTodoTaskTitle";
import { todoTaskCache } from "../../infra/cache/TodoTaskCache";

const addTodoTask = makeAddTodoTask();
const deleteTodoTask = makeDeleteTodoTask(todoTaskCache);
const updateTodoTaskTitle = makeUpdateTodoTaskTitle(todoTaskCache);
const updateTodoTaskState = makeUpdateTodoTaskState(todoTaskCache);
const completeAllTodoTasks = makeCompleteAllTodoTasks(todoTaskCache);
const incompleteAllTodoTasks = makeIncompleteAllTodoTasks(todoTaskCache);
const deleteAllCompletedTodoTasks = makeDeleteAllCompletedTodoTasks(todoTaskCache);

export { 
    addTodoTask, 
    deleteTodoTask, 
    updateTodoTaskTitle, 
    updateTodoTaskState, 
    completeAllTodoTasks, 
    incompleteAllTodoTasks, 
    deleteAllCompletedTodoTasks 
};