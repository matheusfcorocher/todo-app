import { TodoTasks } from "../../../domain/entities/TodoTask";
import { todoTaskCache } from "../../../infra/cache/TodoTaskCache";
import { makeAddTodoTask } from "./AddTodoTask";

afterEach(() => {
    todoTaskCache.clear();
})

describe("Application :: Use Case :: AddTodoTask", () => {
    describe("When todoTasks has TodoTasks", () => {
        it("returns the quantity plus 1 ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
        
            const addTodoTask = makeAddTodoTask(todoTaskCache);
            const newTodoTasks = addTodoTask({ todoTasks, title: 's' });
            expect(newTodoTasks.length).toEqual(2);
        });
        it("localStorage stored todoTasks ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
        
            const storageSpy = jest.spyOn(todoTaskCache, 'store');
            
            const addTodoTask = makeAddTodoTask(todoTaskCache);
            const newTodoTasks = addTodoTask({ todoTasks, title: 's' });
            
            expect(storageSpy).toHaveBeenCalled();
            expect(todoTaskCache.getAllTodoTasks()).toEqual(newTodoTasks);
        });
    });
});