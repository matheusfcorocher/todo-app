import { TodoTasks } from "../../../domain/entities/TodoTask";
import { todoTaskCache } from "../../../infra/cache/TodoTaskCache";
import { makeCompleteAllTodoTasks } from "./CompleteAllTodoTask";

afterEach(() => {
    todoTaskCache.clear();
})

describe("Application :: Use Case :: CompleteAllTodoTasks", () => {
    describe("When pass todoTasks", () => {
        it("returns all todoTasks with IsCompleted true", () => {
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
            const completeAllTodoTasks = makeCompleteAllTodoTasks(todoTaskCache);
            const newTodoTasks = completeAllTodoTasks({ todoTasks });

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

            expect(newTodoTasks).toEqual(expected);
        });
    });
    it("localStorage stored todoTasks ", () => {
        const todoTasks: TodoTasks = [{
            id: "blabla",
            title: "test",
            isCompleted: false
        }];

        const storageSpy = jest.spyOn(todoTaskCache, 'store');

        const completeAllTodoTasks = makeCompleteAllTodoTasks(todoTaskCache);
        const newTodoTasks = completeAllTodoTasks({ todoTasks });

        expect(storageSpy).toHaveBeenCalled();
        expect(todoTaskCache.getAllTodoTasks()).toEqual(newTodoTasks);
    });
});