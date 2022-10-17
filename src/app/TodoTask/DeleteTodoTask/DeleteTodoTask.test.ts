import { TodoTasks } from "../../../domain/entities/TodoTask";
import { makeDeleteTodoTask } from "./DeleteTodoTask";

describe("Application :: Use Case :: DeleteTodoTask", () => {
    describe("When todoTasks has TodoTasks", () => {
        it("returns the quantity minus 1 ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
        
            const deleteTodoTask = makeDeleteTodoTask();
            const newTodoTasks = deleteTodoTask({ todoTasks, id: 'blabla' });
            expect(newTodoTasks.length).toEqual(0);
        });
    });
});