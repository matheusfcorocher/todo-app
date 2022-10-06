import { addTodo, completeAllTodosItem, deleteTodo, incompleteAllTodosItem, Todos, updateTodoState, updateTodoTitle } from "./TodoData";

describe("Domain :: Entity :: Todos", () => {
  describe("#addTodo", () => {
    describe("When todos has todo", () => {
      it("returns the quantity plus 1 ", () => {
        const todos: Todos = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        }];
        const newTodos = addTodo({ todos, title: 's' });

        expect(newTodos.length).toEqual(2);
      });
    });
  });
  describe("#deleteTodo", () => {
    describe("When todos has todo and execute function", () => {
      it("returns the correct answer", () => {
        const todos: Todos = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        }];
        const newTodos = deleteTodo({ todos, id: 'blabla' });

        expect(newTodos.length).toEqual(0);
      });
    });
  });
  describe("#updateTodoTitle", () => {
    describe("When title of todo isn't blank", () => {
      it("returns the new title", () => {
        const todos: Todos = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        }];
        const newTodos = updateTodoTitle({ todos, id: 'blabla', newTitle: "yes" });

        expect(newTodos[0].title).toEqual("yes");
      });
    });
    describe("When title of todo is blank", () => {
      it("it removes todo", () => {
        const todos: Todos = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        }];
        const newTodos = updateTodoTitle({ todos, id: 'blabla', newTitle: "" });

        expect(newTodos.length).toEqual(0);
      });
    });
  });
  describe("#updateTodoState", () => {
    describe("When pass a new state for Todo", () => {
      it("returns todo with new state", () => {
        const todos: Todos = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        }];
        const newTodos = updateTodoState({ todos, id: 'blabla', state: true});

        expect(newTodos[0].isCompleted).toEqual(true);
      });
    });
    describe("When doesnt find todo", () => {
      it("it returns the same todos", () => {
        const todos: Todos = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        }];
        const newTodos = updateTodoState({ todos, id: 'blabl2', state: true });

        expect(newTodos).toEqual(newTodos);
      });
    });
  });
  describe("#completeAllTodosItem", () => {
    describe("When pass todos", () => {
      it("returns all todos with IsCompleted true", () => {
        const todos: Todos = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        },
        {
          id: "blabl2",
          title: "test2",
          isCompleted: false
        },
        ];
        const newTodos = completeAllTodosItem({ todos });

        const expected: Todos = [{
          id: "blabla",
          title: "test",
          isCompleted: true
        },
        {
          id: "blabl2",
          title: "test2",
          isCompleted: true
        },
        ];

        expect(newTodos).toEqual(expected);
      });
    });
  });
  describe("#incompleteAllTodosItem", () => {
    describe("When pass todos", () => {
      it("returns all todos with IsCompleted false", () => {
        const todos: Todos = [{
          id: "blabla",
          title: "test",
          isCompleted: true
        },
        {
          id: "blabl2",
          title: "test2",
          isCompleted: false
        },
        ];
        const newTodos = incompleteAllTodosItem({ todos });

        const expected: Todos = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        },
        {
          id: "blabl2",
          title: "test2",
          isCompleted: false
        },
        ];

        expect(newTodos).toEqual(expected);
      });
    });
  });
});