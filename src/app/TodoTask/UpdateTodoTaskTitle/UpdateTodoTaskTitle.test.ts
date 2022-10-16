import { TodoTasks } from "../../../domain/entities/TodoTask";
import { todoTaskCache } from "../../../infra/cache/TodoTaskCache";
import { makeUpdateTodoTaskTitle } from "./UpdateTodoTaskTitle";

afterEach(() => {
    todoTaskCache.clear();
})

describe("Application :: Use Case :: UpdateTodoTaskTitle", () => {
    describe("When title of todoTask isn't blank", () => {
        it("returns the new title", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
            const updateTodoTaskTitle = makeUpdateTodoTaskTitle(todoTaskCache);
            const newTodoTasks = updateTodoTaskTitle({ todoTasks, id: 'blabla', newTitle: "yes" });

            expect(newTodoTasks[0].title).toEqual("yes");
        });
    });
    describe("When title of todoTask is blank", () => {
        it("it removes todoTask", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
            const updateTodoTaskTitle = makeUpdateTodoTaskTitle(todoTaskCache);
            const newTodoTasks = updateTodoTaskTitle({ todoTasks, id: 'blabla', newTitle: "" });

            expect(newTodoTasks.length).toEqual(0);
        });
    });
    it("localStorage stored todoTasks ", () => {
        const todoTasks: TodoTasks = [{
            id: "blabla",
            title: "test",
            isCompleted: false
        }];
        const storageSpy = jest.spyOn(todoTaskCache, 'store');
        
        const updateTodoTaskTitle = makeUpdateTodoTaskTitle(todoTaskCache);
        const newTodoTasks = updateTodoTaskTitle({ todoTasks, id: 'blabla', newTitle: "yes" });

        expect(storageSpy).toHaveBeenCalled();
        expect(todoTaskCache.getAllTodoTasks()).toEqual(newTodoTasks);
    });
});