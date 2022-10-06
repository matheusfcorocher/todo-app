import { addTodo, deleteTodo, Todos, updateTodoTitle } from "./TodoData";

describe("Domain :: Entity :: Todos", () => {
    describe("#addTodo", () => {
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
    describe("#deleteTodo", () => {
        describe("When todos has todo and execute function", () => {
          it("returns the correct answer", () => {
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
    describe("#updateTodoTitle", () => {
        describe("When title of todo isn't blank", () => {
          it("returns the new title", () => {
            const todos : Todos = [{
              id: "blabla",
              title: "test",
              isCompleted: false
            }];      
            const newTodos = updateTodoTitle({todos, id: 'blabla', newTitle: "yes"});
  
            expect(newTodos[0].title).toEqual("yes");
          });
        });
        describe("When title of todo is blank", () => {
            it("it removes todo", () => {
              const todos : Todos = [{
                id: "blabla",
                title: "test",
                isCompleted: false
              }];      
              const newTodos = updateTodoTitle({todos, id: 'blabla', newTitle: ""});
    
              expect(newTodos.length).toEqual(0);
            });
          });
    });
});