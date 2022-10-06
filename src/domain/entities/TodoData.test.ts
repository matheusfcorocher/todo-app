import { addTodo, Todos } from "./TodoData";

describe("Domain :: Entity :: Todos", () => {
    describe("addTodo", () => {
      describe("When todos has todo", () => {
        it.only("returns the quantity plus 1 ", () => {
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
});