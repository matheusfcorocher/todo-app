import { TodoTasks } from "../../../domain/entities/TodoTask";
import { makeUpdateTodoTaskTitle } from "./UpdateTodoTaskTitle";

describe("Application :: Use Case :: UpdateTodoTaskTitle", () => {
    describe("When title of todoTask isn't blank", () => {
        it("returns the new title", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
            const updateTodoTaskTitle = makeUpdateTodoTaskTitle();
            const newTodoTasks = updateTodoTaskTitle({ todoTasks, id: 'blabla', newTitle: "yes" });

            expect(newTodoTasks[0].title).toEqual("yes");
        });
    });
});