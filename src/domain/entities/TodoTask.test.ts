import { addTodoTask, completeAllTodoTasksItem, deleteTodoTask, incompleteAllTodoTasksItem, TodoTasks, updateTodoTaskState, updateTodoTaskTitle } from "./TodoTask";

describe("Domain :: Entity :: TodoTask", () => {
  describe("#addTodoTask", () => {
    describe("When todoTasks has todoTask", () => {
      it("returns the quantity plus 1 ", () => {
        const todoTasks: TodoTasks = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        }];
        const newTodoTasks = addTodoTask({ todoTasks, title: 's' });

        expect(newTodoTasks.length).toEqual(2);
      });
    });
  });
  describe("#deleteTodoTask", () => {
    describe("When todoTasks has todoTask", () => {
      it("returns the correct answer", () => {
        const todoTasks: TodoTasks = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        }];
        const newTodoTasks = deleteTodoTask({ todoTasks, id: 'blabla' });

        expect(newTodoTasks.length).toEqual(0);
      });
    });
  });
  describe("#updateTodoTaskTitle", () => {
    describe("When title of todoTask isn't blank", () => {
      it("returns the new title", () => {
        const todoTasks: TodoTasks = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        }];
        const newTodoTasks = updateTodoTaskTitle({ todoTasks, id: 'blabla', newTitle: "yes" });

        expect(newTodoTasks[0].title).toEqual("yes");
      });
    });
    describe("When title of todoTask is blank", () => {
      it("it removes todoTask", () => {
        const todoTasks: TodoTasks = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        }];
        const newTodoTasks = updateTodoTaskTitle({ todoTasks, id: 'blabla', newTitle: "" });

        expect(newTodoTasks.length).toEqual(0);
      });
    });
  });
  describe("#updateTodoTaskState", () => {
    describe("When pass a new state for todoTask", () => {
      it("returns todoTask with new state", () => {
        const todoTasks: TodoTasks = [{
          id: "blabla",
          title: "test",
          isCompleted: false
        }];
        const newTodoTasks = updateTodoTaskState({ todoTasks, id: 'blabla', state: true});

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
        const newTodoTasks = updateTodoTaskState({ todoTasks, id: 'blabl2', state: true });

        expect(newTodoTasks).toEqual(newTodoTasks);
      });
    });
  });
  describe("#completeAllTodoTasksItem", () => {
    describe("When pass todoTasks", () => {
      it("returns all todoTasks with IsCompleted true", () => {
        const todoTasks: TodoTasks = [{
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
        const newTodoTasks = completeAllTodoTasksItem({ todoTasks });

        const expected: TodoTasks = [{
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

        expect(newTodoTasks).toEqual(expected);
      });
    });
  });
  describe("#incompleteAllTodoTasksItem", () => {
    describe("When pass todoTasks", () => {
      it("returns all todoTasks with IsCompleted false", () => {
        const todoTasks: TodoTasks = [{
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
        const newTodoTasks = incompleteAllTodoTasksItem({ todoTasks });

        const expected: TodoTasks = [{
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

        expect(newTodoTasks).toEqual(expected);
      });
    });
  });
});