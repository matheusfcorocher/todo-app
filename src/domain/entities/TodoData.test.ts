import { addTodo, deleteTodo, Todos } from "./TodoData";

describe("Domain :: Entity :: Todos", () => {
    describe("addTodo", () => {
      describe("When todos has todo", () => {
        it("returns the quantity plus 1 ", () => {
          const todos : Todos = [{
            id: "blabla",
            title: "test",
            isCompleted: false
          }];      
          const newTodos = addTodo({todos, title: 's'});

          expect(newTodos.length).toEqual(2);
        });
      });
    });
    describe("deleteTodo", () => {
        describe("When todos has todo and execute function", () => {
          it.only("returns the correct answer", () => {
            const todos : Todos = [{
              id: "blabla",
              title: "test",
              isCompleted: false
            }];      
            const newTodos = deleteTodo({todos, id: 'blabla'});
  
            expect(newTodos.length).toEqual(0);
          });
        });
      });
});