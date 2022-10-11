import { TodoTasks } from "../../../domain/entities/TodoTask";
import { lsTodoTaskRepository } from "../../../infra/repositories/LSTodoTaskRepository";
import { makeAddTodoTask } from "./AddTodoTask";

describe("Application :: Use Case :: AddTodoTask", () => {
    describe("When todoTasks has TodoTasks", () => {
        it("returns the quantity plus 1 ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
        
            const addTodoTask = makeAddTodoTask(lsTodoTaskRepository);
            const newTodoTasks = addTodoTask({ todoTasks, title: 's' });
            expect(newTodoTasks.length).toEqual(2);
        });
        it("localStorage stored todoTasks ", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
        
            const storageSpy = jest.spyOn(lsTodoTaskRepository, 'store');
            
            const addTodoTask = makeAddTodoTask(lsTodoTaskRepository);
            const newTodoTasks = addTodoTask({ todoTasks, title: 's' });
            
            expect(storageSpy).toHaveBeenCalled();
            expect(lsTodoTaskRepository.getAllTodoTasks()).toEqual(newTodoTasks);
        });
    });
});