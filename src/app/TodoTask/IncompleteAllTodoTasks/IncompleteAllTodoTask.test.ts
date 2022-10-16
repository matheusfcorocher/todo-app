import { TodoTasks } from "../../../domain/entities/TodoTask";
import { todoTaskCache } from "../../../infra/cache/TodoTaskCache";
import { makeIncompleteAllTodoTasks } from "./IncompleteAllTodoTask";

afterEach(() => {
    todoTaskCache.clear();
})

describe("Application :: Use Case :: IncompleteAllTodoTasks", () => {
    describe("When pass todoTasks", () => {
        it("returns all todoTasks with IsCompleted false", () => {
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
            const incompleteAllTodoTasks = makeIncompleteAllTodoTasks(todoTaskCache);
            const newTodoTasks = incompleteAllTodoTasks({ todoTasks });

            const expected: TodoTasks = [{
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

        const incompleteAllTodoTasks = makeIncompleteAllTodoTasks(todoTaskCache);
        const newTodoTasks = incompleteAllTodoTasks({ todoTasks });

        expect(storageSpy).toHaveBeenCalled();
        expect(todoTaskCache.getAllTodoTasks()).toEqual(newTodoTasks);
    });
});