import { TodoTasks } from "../../domain/entities/TodoTask";
import { todoTaskViewModel } from "./TodoTaskViewModel";

describe("Presentation :: Models :: TodoTaskViewModel", () => {
    describe("#isThereAnyTodoTaskCompleted", () => {
        describe("When pass todoTasks with", () => {
            describe("at least one is IsCompleted", () => {
                it("returns true", () => {
                    const todoTasks: TodoTasks = [{
                        id: "blabla",
                        title: "test",
                        isCompleted: true
                    },
                    {
                        id: "blabl2",
                        title: "test2",
                        isCompleted: false
                    },
                    ];
                    const { isThereAnyTodoTaskCompleted } = todoTaskViewModel;
                    const newTodoTasks = isThereAnyTodoTaskCompleted(todoTasks);

                    const expected: boolean = true;

                    expect(newTodoTasks).toEqual(expected);
                });
            })
            describe("at none is IsCompleted", () => {
                it("returns false", () => {
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
                    const { isThereAnyTodoTaskCompleted } = todoTaskViewModel;
                    const newTodoTasks = isThereAnyTodoTaskCompleted(todoTasks);

                    const expected: boolean = false;

                    expect(newTodoTasks).toEqual(expected);
                });
            })
        });
    });
    describe("#isTodoTasksNotEmpty", () => {
        describe("When pass todoTasks with", () => {
            describe("0 todos tasks", () => {
                it("returns false", () => {
                    const todoTasks: TodoTasks = [];
                    const { isTodoTasksNotEmpty } = todoTaskViewModel;
                    const answer = isTodoTasksNotEmpty(todoTasks);

                    const expected: boolean = false;

                    expect(answer).toEqual(expected);
                });
            })
            describe("many todos tasks", () => {
                it("returns true", () => {
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
                    const { isTodoTasksNotEmpty } = todoTaskViewModel;
                    const answer = isTodoTasksNotEmpty(todoTasks);

                    const expected: boolean = true;

                    expect(answer).toEqual(expected);
                });
            })
        });
    });
    describe("#returnOnlyActiveTodoTasks", () => {
        describe("When pass todoTasks with", () => {
            describe("isCompleted false", () => {
                it("returns only todoTasks with isCompleted false", () => {
                    const todoTasks: TodoTasks = [{
                        id: "blabla",
                        title: "test",
                        isCompleted: true
                    },
                    {
                        id: "blabl2",
                        title: "test2",
                        isCompleted: false
                    },
                    ];
                    const { returnOnlyActiveTodoTasks } = todoTaskViewModel;
                    const newTodoTasks = returnOnlyActiveTodoTasks(todoTasks);

                    const expected: TodoTasks = [{
                        id: "blabl2",
                        title: "test2",
                        isCompleted: false
                    },];

                    expect(newTodoTasks).toEqual(expected);
                });
            })
        });
    });
});