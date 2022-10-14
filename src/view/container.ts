import { makeAddTodoTask } from "../app/TodoTask/AddTodoTask/AddTodoTask";
import { makeCompleteAllTodoTasks } from "../app/TodoTask/CompleteAllTodoTasks/CompleteAllTodoTask";
import { makeDeleteAllCompletedTodoTasks } from "../app/TodoTask/DeleteAllCompletedTodoTasks/DeleteAllCompletedTodoTasks";
import { makeDeleteTodoTask } from "../app/TodoTask/DeleteTodoTask/DeleteTodoTask";
import { makeIncompleteAllTodoTasks } from "../app/TodoTask/IncompleteAllTodoTasks/IncompleteAllTodoTask";
import { makeUpdateTodoTaskState } from "../app/TodoTask/UpdateTodoTaskState/UpdateTodoTaskState";
import { makeUpdateTodoTaskTitle } from "../app/TodoTask/UpdateTodoTaskTitle/UpdateTodoTaskTitle";
import { lsTodoTaskRepository } from "../infra/repositories/LSTodoTaskRepository";

const addTodoTask = makeAddTodoTask(lsTodoTaskRepository);
const deleteTodoTask = makeDeleteTodoTask(lsTodoTaskRepository);
const updateTodoTaskTitle = makeUpdateTodoTaskTitle(lsTodoTaskRepository);
const updateTodoTaskState = makeUpdateTodoTaskState(lsTodoTaskRepository);
const completeAllTodoTasks = makeCompleteAllTodoTasks(lsTodoTaskRepository);
const incompleteAllTodoTasks = makeIncompleteAllTodoTasks(lsTodoTaskRepository);
const deleteAllCompletedTodoTasks = makeDeleteAllCompletedTodoTasks(lsTodoTaskRepository);

export { 
    addTodoTask, 
    deleteTodoTask, 
    updateTodoTaskTitle, 
    updateTodoTaskState, 
    completeAllTodoTasks, 
    incompleteAllTodoTasks, 
    deleteAllCompletedTodoTasks 
};