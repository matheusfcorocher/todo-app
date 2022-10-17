import { makeAddTodoTask } from "../../app/TodoTask/AddTodoTask/AddTodoTask";
import { makeCompleteAllTodoTasks } from "../../app/TodoTask/CompleteAllTodoTasks/CompleteAllTodoTask";
import { makeDeleteAllCompletedTodoTasks } from "../../app/TodoTask/DeleteAllCompletedTodoTasks/DeleteAllCompletedTodoTasks";
import { makeDeleteTodoTask } from "../../app/TodoTask/DeleteTodoTask/DeleteTodoTask";
import { makeIncompleteAllTodoTasks } from "../../app/TodoTask/IncompleteAllTodoTasks/IncompleteAllTodoTask";
import { makeUpdateTodoTaskState } from "../../app/TodoTask/UpdateTodoTaskState/UpdateTodoTaskState";
import { makeUpdateTodoTaskTitle } from "../../app/TodoTask/UpdateTodoTaskTitle/UpdateTodoTaskTitle";

const addTodoTask = makeAddTodoTask();
const deleteTodoTask = makeDeleteTodoTask();
const updateTodoTaskTitle = makeUpdateTodoTaskTitle();
const updateTodoTaskState = makeUpdateTodoTaskState();
const completeAllTodoTasks = makeCompleteAllTodoTasks();
const incompleteAllTodoTasks = makeIncompleteAllTodoTasks();
const deleteAllCompletedTodoTasks = makeDeleteAllCompletedTodoTasks();

export { 
    addTodoTask, 
    deleteTodoTask, 
    updateTodoTaskTitle, 
    updateTodoTaskState, 
    completeAllTodoTasks, 
    incompleteAllTodoTasks, 
    deleteAllCompletedTodoTasks 
};