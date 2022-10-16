import { TodoTasks } from "../../../domain/entities/TodoTask";
import { todoTaskCache } from "../../../infra/cache/TodoTaskCache";
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

            const deleteAllCompletedTodoTasks = makeDeleteAllCompletedTodoTasks(todoTaskCache);
            const newTodoTasks = deleteAllCompletedTodoTasks({ todoTasks });
            expect(newTodoTasks.length).toEqual(1);
        });
        it("localStorage stored todoTasks ", () => {
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

            const storageSpy = jest.spyOn(todoTaskCache, 'store');
            
            const deleteAllCompletedTodoTasks = makeDeleteAllCompletedTodoTasks(todoTaskCache);
            const newTodoTasks = deleteAllCompletedTodoTasks({ todoTasks });

            expect(storageSpy).toHaveBeenCalled();
            expect(todoTaskCache.getAllTodoTasks()).toEqual(newTodoTasks);
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

            const deleteAllCompletedTodoTasks = makeDeleteAllCompletedTodoTasks(todoTaskCache);
            const newTodoTasks = deleteAllCompletedTodoTasks({ todoTasks });
            expect(newTodoTasks.length).toEqual(2);
        });
    });
});