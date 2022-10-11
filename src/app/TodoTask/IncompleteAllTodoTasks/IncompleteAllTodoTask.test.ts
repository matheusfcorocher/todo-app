import { TodoTasks } from "../../../domain/entities/TodoTask";
import { lsTodoTaskRepository } from "../../../infra/repositories/LSTodoTaskRepository";
import { makeIncompleteAllTodoTasks } from "./IncompleteAllTodoTask";

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
            const incompleteAllTodoTasks = makeIncompleteAllTodoTasks(lsTodoTaskRepository);
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

        const storageSpy = jest.spyOn(lsTodoTaskRepository, 'store');

        const incompleteAllTodoTasks = makeIncompleteAllTodoTasks(lsTodoTaskRepository);
        const newTodoTasks = incompleteAllTodoTasks({ todoTasks });

        expect(storageSpy).toHaveBeenCalled();
        expect(lsTodoTaskRepository.getAllTodoTasks()).toEqual(newTodoTasks);
    });
});