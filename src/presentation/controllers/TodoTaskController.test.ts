import { TodoTasks } from "../../domain/entities/TodoTask";
import { todoTaskCache } from "../../infra/cache/TodoTaskCache";
import { makeTodoTaskController } from "./TodoTaskController";

describe("Presentation :: Controllers :: TodoTaskController", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    })

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
    describe("#handleCompleteAllTodoTasks", () => {
        describe("When completes all todo tasks", () => {
            it("returns the correct todoTasks", () => {
                const todoTasks: TodoTasks = [{
                    id: "blabla",
                    title: "test",
                    isCompleted: false
                },
                {
                    id: "blabl2",
                    title: "test2",
                    isCompleted: false
                },
                ];

                let result: TodoTasks = [];
                function setTodoTasks(newTodoTasks: TodoTasks) {
                    result = [...result, ...newTodoTasks];
                };
                const todoTaskController = makeTodoTaskController({ todoTasks, updateTodoTasks: setTodoTasks, localStorage: todoTaskCache });
                todoTaskController.handleCompleteAllTodoTasks();
                const expected: TodoTasks = [{
                    id: "blabla",
                    title: "test",
                    isCompleted: true
                },
                {
                    id: "blabl2",
                    title: "test2",
                    isCompleted: true
                },
                ];

                expect(result).toEqual(expected);
            });
            it("localStorage stored todoTasks ", () => {
                const todoTasks: TodoTasks = [{
                    id: "blabla",
                    title: "test",
                    isCompleted: false
                },
                {
                    id: "blabl2",
                    title: "test2",
                    isCompleted: false
                },
                ];
                const storageSpy = jest.spyOn(todoTaskCache, 'store');

                let result: TodoTasks = [];
                function setTodoTasks(newTodoTasks: TodoTasks) {
                    result = [...result, ...newTodoTasks];
                };
                const todoTaskController = makeTodoTaskController({ todoTasks, updateTodoTasks: setTodoTasks, localStorage: todoTaskCache });
                todoTaskController.handleCompleteAllTodoTasks();

                expect(storageSpy).toHaveBeenCalled();
                expect(todoTaskCache.getAllTodoTasks()).toEqual(result);
            });
        });
    });
    describe("#handleDeleteAllCompletedTodoTasks", () => {
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

                let result: TodoTasks = [];
                function setTodoTasks(newTodoTasks: TodoTasks) {
                    result = [...result, ...newTodoTasks];
                };
                const todoTaskController = makeTodoTaskController({ todoTasks, updateTodoTasks: setTodoTasks, localStorage: todoTaskCache });
                todoTaskController.handleDeleteAllCompletedTodoTasks();

                expect(result.length).toEqual(1);
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

                let result: TodoTasks = [];
                function setTodoTasks(newTodoTasks: TodoTasks) {
                    result = [...result, ...newTodoTasks];
                };
                const todoTaskController = makeTodoTaskController({ todoTasks, updateTodoTasks: setTodoTasks, localStorage: todoTaskCache });
                todoTaskController.handleDeleteAllCompletedTodoTasks();

                expect(result.length).toEqual(2);
            });
        });
        it("localStorage stored todoTasks ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            },
            {
                id: "blabl2",
                title: "test2",
                isCompleted: false
            },
            ];
            const storageSpy = jest.spyOn(todoTaskCache, 'store');

            let result: TodoTasks = [];
            function setTodoTasks(newTodoTasks: TodoTasks) {
                result = [...result, ...newTodoTasks];
            };
            const todoTaskController = makeTodoTaskController({ todoTasks, updateTodoTasks: setTodoTasks, localStorage: todoTaskCache });
            todoTaskController.handleDeleteAllCompletedTodoTasks();

            expect(storageSpy).toHaveBeenCalled();
            expect(todoTaskCache.getAllTodoTasks()).toEqual(result);
        });
    });
});