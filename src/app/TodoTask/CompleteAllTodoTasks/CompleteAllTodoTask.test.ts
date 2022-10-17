import { TodoTasks } from "../../../domain/entities/TodoTask";
import { makeCompleteAllTodoTasks } from "./CompleteAllTodoTask";

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
            const completeAllTodoTasks = makeCompleteAllTodoTasks();
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
});