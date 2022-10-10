import { TodoTasks } from "../../domain/entities/TodoTask";
import { makeAddTodoTask } from "./AddTodoTask";

describe("Application :: Use Case :: AddTodoTask", () => {
    describe("When todoTasks has todoTask", () => {
        it("returns the quantity plus 1 ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
            const addTodoTask = makeAddTodoTask();
            const newTodoTasks = addTodoTask({ todoTasks, title: 's' });

            expect(newTodoTasks.length).toEqual(2);
        });
    });
});