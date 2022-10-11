import { TodoTasks } from "../../../domain/entities/TodoTask";
import { lsTodoTaskRepository } from "../../../infra/repositories/LSTodoTaskRepository";
import { makeUpdateTodoTaskState } from "./UpdateTodoTaskState";

afterEach(() => {
    lsTodoTaskRepository.clear();
})

describe("Application :: Use Case :: UpdateTodoTaskState", () => {
    describe("When pass a new state for todoTask", () => {
        it("returns todoTask with new state", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
            const updateTodoTaskState = makeUpdateTodoTaskState(lsTodoTaskRepository);
            const newTodoTasks = updateTodoTaskState({ todoTasks, id: 'blabla', state: true });

            expect(newTodoTasks[0].isCompleted).toEqual(true);
        });
    });
    describe("When doesnt find todoTask", () => {
        it("it returns the same todoTasks", () => {
            const todoTasks: TodoTasks = [{
                id: "blabla",
                title: "test",
                isCompleted: false
            }];
            const updateTodoTaskState = makeUpdateTodoTaskState(lsTodoTaskRepository);
            const newTodoTasks = updateTodoTaskState({ todoTasks, id: 'blabl2', state: true });

            expect(newTodoTasks).toEqual(newTodoTasks);
        });
    });
    it("localStorage stored todoTasks ", () => {
        const todoTasks: TodoTasks = [{
            id: "blabla",
            title: "test",
            isCompleted: false
        }];
        const storageSpy = jest.spyOn(lsTodoTaskRepository, 'store');
        
        const updateTodoTaskState = makeUpdateTodoTaskState(lsTodoTaskRepository);
        const newTodoTasks = updateTodoTaskState({ todoTasks, id: 'blabla', state: true });
        
        expect(storageSpy).toHaveBeenCalled();
        expect(lsTodoTaskRepository.getAllTodoTasks()).toEqual(newTodoTasks);
    });
});