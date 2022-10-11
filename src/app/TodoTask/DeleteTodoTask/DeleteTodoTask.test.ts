import { TodoTasks } from "../../../domain/entities/TodoTask";
import { lsTodoTaskRepository } from "../../../infra/repositories/LSTodoTaskRepository";
import { makeDeleteTodoTask } from "./DeleteTodoTask";

afterEach(() => {
    lsTodoTaskRepository.clear();
})

describe("Application :: Use Case :: DeleteTodoTask", () => {
    describe("When todoTasks has TodoTasks", () => {
        it("returns the quantity minus 1 ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
        
            const deleteTodoTask = makeDeleteTodoTask(lsTodoTaskRepository);
            const newTodoTasks = deleteTodoTask({ todoTasks, id: 'blabla' });
            expect(newTodoTasks.length).toEqual(0);
        });
        it("localStorage stored todoTasks ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
        
            const storageSpy = jest.spyOn(lsTodoTaskRepository, 'store');
            
            const deleteTodoTask = makeDeleteTodoTask(lsTodoTaskRepository);
            const newTodoTasks = deleteTodoTask({ todoTasks, id: "blabla" });
            
            expect(storageSpy).toHaveBeenCalled();
            expect(lsTodoTaskRepository.getAllTodoTasks()).toEqual(newTodoTasks);
        });
    });
});