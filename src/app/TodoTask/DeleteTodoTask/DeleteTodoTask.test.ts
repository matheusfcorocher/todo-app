import { TodoTasks } from "../../../domain/entities/TodoTask";
import { todoTaskCache } from "../../../infra/cache/TodoTaskCache";
import { makeDeleteTodoTask } from "./DeleteTodoTask";

afterEach(() => {
    todoTaskCache.clear();
})

describe("Application :: Use Case :: DeleteTodoTask", () => {
    describe("When todoTasks has TodoTasks", () => {
        it("returns the quantity minus 1 ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
        
            const deleteTodoTask = makeDeleteTodoTask(todoTaskCache);
            const newTodoTasks = deleteTodoTask({ todoTasks, id: 'blabla' });
            expect(newTodoTasks.length).toEqual(0);
        });
        it("localStorage stored todoTasks ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
        
            const storageSpy = jest.spyOn(todoTaskCache, 'store');
            
            const deleteTodoTask = makeDeleteTodoTask(todoTaskCache);
            const newTodoTasks = deleteTodoTask({ todoTasks, id: "blabla" });
            
            expect(storageSpy).toHaveBeenCalled();
            expect(todoTaskCache.getAllTodoTasks()).toEqual(newTodoTasks);
        });
    });
});