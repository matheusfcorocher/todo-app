import { TodoTasks } from "../../../domain/entities/TodoTask";
import { makeUpdateTodoTaskState } from "./UpdateTodoTaskState";

describe("Application :: Use Case :: UpdateTodoTaskState", () => {
    describe("When pass a new state for todoTask", () => {
        it("returns todoTask with new state", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
            const updateTodoTaskState = makeUpdateTodoTaskState();
            const newTodoTasks = updateTodoTaskState({ todoTasks, id: 'blabla', state: true });

            expect(newTodoTasks[0].isCompleted).toEqual(true);
        });
    });
    describe("When doesnt find todoTask", () => {
        it("it returns the same todoTasks", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
            const updateTodoTaskState = makeUpdateTodoTaskState();
            const newTodoTasks = updateTodoTaskState({ todoTasks, id: 'blabl2', state: true });

            expect(newTodoTasks).toEqual(newTodoTasks);
        });
    });
});