import { TodoTasks } from "../../../domain/entities/TodoTask";
import { makeDeleteAllCompletedTodoTasks } from "./DeleteAllCompletedTodoTasks";

describe("Application :: Use Case :: DeleteAllCompletedTodoTasks", () => {
    describe("When todoTasks has active and completed TodoTasks", () => {
        it("returns the quantity only of active todoTasks ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: true
            },
            {
                id: "blabl2",
                title: "test2",
                isCompleted: false
            }];

            const deleteAllCompletedTodoTasks = makeDeleteAllCompletedTodoTasks();
            const newTodoTasks = deleteAllCompletedTodoTasks({ todoTasks });
            expect(newTodoTasks.length).toEqual(1);
        });
    });
    describe("When todoTasks has only active TodoTasks", () => {
        it("returns the same quantity of TodoTasks", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            },
            {
                id: "blabl2",
                title: "test2",
                isCompleted: false
            }];

            const deleteAllCompletedTodoTasks = makeDeleteAllCompletedTodoTasks();
            const newTodoTasks = deleteAllCompletedTodoTasks({ todoTasks });
            expect(newTodoTasks.length).toEqual(2);
        });
    });
});