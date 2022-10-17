import { TodoTasks } from "../../domain/entities/TodoTask";
import { todoTaskCache } from "../../infra/cache/TodoTaskCache";
import { makeTodoTaskController } from "./TodoTaskController";

afterEach(() => {
    todoTaskCache.clear();
})

describe("Presentation :: Controllers :: TodoTaskController", () => {
    describe("#handleAddTodoTask", () => {
        describe("When adds a todo task", () => {
            it("returns the correct todoTasks", () => {
                const todoTasks: TodoTasks = [{
                    id: "blabla",
                    title: "test",
                    isCompleted: true
                }];

                let result: TodoTasks = [];
                function setTodoTasks(newTodoTasks: TodoTasks) {
                    result = [...result, ...newTodoTasks];
                };
                const todoTaskController = makeTodoTaskController({ todoTasks, updateTodoTasks: setTodoTasks, localStorage: todoTaskCache });
                todoTaskController.handleAddTodoTask("test2");
                
                let expected = [
                    { id: "blabla", isCompleted: true, title: "test" },
                    { id: expect.stringMatching(/./), isCompleted: false, title: "test2" }
                ];

                expect(result).toEqual(expected);
            });
            it("localStorage stored todoTasks ", () => {
                const todoTasks: TodoTasks = [{
                    id: "blabla",
                    title: "test",
                    isCompleted: true
                }];
                const storageSpy = jest.spyOn(todoTaskCache, 'store');

                let expected: TodoTasks = [];
                function setTodoTasks(newTodoTasks: TodoTasks) {
                    expected = [...expected, ...newTodoTasks];
                };

                const todoTaskController = makeTodoTaskController({ todoTasks, updateTodoTasks: setTodoTasks, localStorage: todoTaskCache });
                todoTaskController.handleAddTodoTask("test2");

                expect(storageSpy).toHaveBeenCalled();
                expect(todoTaskCache.getAllTodoTasks()).toEqual(expected);
            });
        });
    });
});