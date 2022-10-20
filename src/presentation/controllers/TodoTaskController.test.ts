import { TodoTasks } from "../../domain/entities/TodoTask";
import { todoTaskCache } from "../../infra/cache/TodoTaskCache";
import { makeTodoTaskController } from "./TodoTaskController";
import { todoTasksViewModel } from "../models/TodoTaskViewModel";

describe("Presentation :: Controllers :: TodoTaskController", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe("#handleAddTodoTask", () => {
    describe("When adds a todo task", () => {
      it("returns the correct todoTasks", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: true,
          },
        ];

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel,
        });
        todoTaskController.handleAddTodoTask("test2");

        let expected = [
          { id: "blabla", isCompleted: true, title: "test" },
          {
            id: expect.stringMatching(/./),
            isCompleted: false,
            title: "test2",
          },
        ];

        expect(result).toEqual(expected);
      });
      it("localStorage stored todoTasks ", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: true,
          },
        ];
        const storageSpy = jest.spyOn(todoTaskCache, "store");

        let expected: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          expected = [...expected, ...newTodoTasks];
        }

        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel,
        });
        todoTaskController.handleAddTodoTask("test2");

        expect(storageSpy).toHaveBeenCalled();
        expect(todoTaskCache.getAllTodoTasks()).toEqual(expected);
      });
    });
  });
  describe("#handleCompleteAllTodoTasks", () => {
    describe("When completes all todo tasks", () => {
      it("returns the correct todoTasks", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: false,
          },
          {
            id: "blabl2",
            title: "test2",
            isCompleted: false,
          },
        ];

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel,
        });
        todoTaskController.handleCompleteAllTodoTasks();
        const expected: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: true,
          },
          {
            id: "blabl2",
            title: "test2",
            isCompleted: true,
          },
        ];

        expect(result).toEqual(expected);
      });
      it("localStorage stored todoTasks ", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: false,
          },
          {
            id: "blabl2",
            title: "test2",
            isCompleted: false,
          },
        ];
        const storageSpy = jest.spyOn(todoTaskCache, "store");

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel,
        });
        todoTaskController.handleCompleteAllTodoTasks();

        expect(storageSpy).toHaveBeenCalled();
        expect(todoTaskCache.getAllTodoTasks()).toEqual(result);
      });
    });
  });
  describe("#handleDeleteAllCompletedTodoTasks", () => {
    describe("When todoTasks has active and completed TodoTasks", () => {
      it("returns the quantity only of active todoTasks ", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: true,
          },
          {
            id: "blabl2",
            title: "test2",
            isCompleted: false,
          },
        ];

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel,
        });
        todoTaskController.handleDeleteAllCompletedTodoTasks();

        expect(result.length).toEqual(1);
      });
    });
    describe("When todoTasks has only active TodoTasks", () => {
      it("returns the same quantity of TodoTasks", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: false,
          },
          {
            id: "blabl2",
            title: "test2",
            isCompleted: false,
          },
        ];

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel,
        });
        todoTaskController.handleDeleteAllCompletedTodoTasks();

        expect(result.length).toEqual(2);
      });
    });
    it("localStorage stored todoTasks ", () => {
      const todoTasks: TodoTasks = [
        {
          id: "blabla",
          title: "test",
          isCompleted: false,
        },
        {
          id: "blabl2",
          title: "test2",
          isCompleted: false,
        },
      ];
      const storageSpy = jest.spyOn(todoTaskCache, "store");

      let result: TodoTasks = [];
      function setTodoTasks(newTodoTasks: TodoTasks) {
        result = [...result, ...newTodoTasks];
      }
      const todoTaskController = makeTodoTaskController({
        todoTasks,
        updateTodoTasks: setTodoTasks,
        localStorage: todoTaskCache,
        todoTasksViewModel,
      });
      todoTaskController.handleDeleteAllCompletedTodoTasks();

      expect(storageSpy).toHaveBeenCalled();
      expect(todoTaskCache.getAllTodoTasks()).toEqual(result);
    });
  });
  describe("#handleDeleteTodoTask", () => {
    describe("When todoTasks has TodoTasks", () => {
      it("returns the quantity minus 1 ", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: false,
          },
        ];

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel,
        });
        todoTaskController.handleDeleteTodoTask("blabla");

        expect(result.length).toEqual(0);
      });
      it("localStorage stored todoTasks ", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: false,
          },
        ];

        const storageSpy = jest.spyOn(todoTaskCache, "store");

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel,
        });
        todoTaskController.handleDeleteTodoTask("blabla");

        expect(storageSpy).toHaveBeenCalled();
        expect(todoTaskCache.getAllTodoTasks()).toEqual(result);
      });
    });
  });
  describe("#handleIncompleteAllTodoTasks", () => {
    describe("When pass todoTasks", () => {
      it("returns all todoTasks with IsCompleted false", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: true,
          },
          {
            id: "blabl2",
            title: "test2",
            isCompleted: false,
          },
        ];

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel
        });
        todoTaskController.handleIncompleteAllTodoTasks();

        const expected: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: false,
          },
          {
            id: "blabl2",
            title: "test2",
            isCompleted: false,
          },
        ];

        expect(result).toEqual(expected);
      });
      it("localStorage stored todoTasks ", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: true,
          },
          {
            id: "blabl2",
            title: "test2",
            isCompleted: false,
          },
        ];

        const storageSpy = jest.spyOn(todoTaskCache, "store");

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel
        });
        todoTaskController.handleIncompleteAllTodoTasks();

        expect(storageSpy).toHaveBeenCalled();
        expect(todoTaskCache.getAllTodoTasks()).toEqual(result);
      });
    });
  });
  describe("#handleUpdateTodoTaskState", () => {
    describe("When pass a new state for todoTask", () => {
      it("returns todoTask with new state", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: false,
          },
        ];

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel
        });
        todoTaskController.handleUpdateTodoTaskState("blabla", true);

        expect(result[0].isCompleted).toEqual(true);
      });
    });
    describe("When doesnt find todoTask", () => {
      it("it returns the same todoTasks", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabl2",
            title: "test",
            isCompleted: false,
          },
        ];

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel
        });
        todoTaskController.handleUpdateTodoTaskState("blabla", true);

        expect(result).toEqual(todoTasks);
      });
    });
    it("localStorage stored todoTasks ", () => {
      const todoTasks: TodoTasks = [
        {
          id: "blabla",
          title: "test",
          isCompleted: false,
        },
      ];

      const storageSpy = jest.spyOn(todoTaskCache, "store");

      let result: TodoTasks = [];
      function setTodoTasks(newTodoTasks: TodoTasks) {
        result = [...result, ...newTodoTasks];
      }
      const todoTaskController = makeTodoTaskController({
        todoTasks,
        updateTodoTasks: setTodoTasks,
        localStorage: todoTaskCache,
        todoTasksViewModel
      });
      todoTaskController.handleUpdateTodoTaskState("blabla", true);

      expect(storageSpy).toHaveBeenCalled();
      expect(todoTaskCache.getAllTodoTasks()).toEqual(result);
    });
  });
  describe("#handleUpdateTodoTaskTitle", () => {
    describe("When title of todoTask isn't blank", () => {
      it("returns the new title", () => {
        const todoTasks: TodoTasks = [
          {
            id: "blabla",
            title: "test",
            isCompleted: false,
          },
        ];

        let result: TodoTasks = [];
        function setTodoTasks(newTodoTasks: TodoTasks) {
          result = [...result, ...newTodoTasks];
        }
        const todoTaskController = makeTodoTaskController({
          todoTasks,
          updateTodoTasks: setTodoTasks,
          localStorage: todoTaskCache,
          todoTasksViewModel
        });
        todoTaskController.handleUpdateTodoTaskTitle("blabla", "yes");

        expect(result[0].title).toEqual("yes");
      });
    });
    it("localStorage stored todoTasks ", () => {
      const todoTasks: TodoTasks = [
        {
          id: "blabla",
          title: "test",
          isCompleted: false,
        },
      ];

      const storageSpy = jest.spyOn(todoTaskCache, "store");

      let result: TodoTasks = [];
      function setTodoTasks(newTodoTasks: TodoTasks) {
        result = [...result, ...newTodoTasks];
      }
      const todoTaskController = makeTodoTaskController({
        todoTasks,
        updateTodoTasks: setTodoTasks,
        localStorage: todoTaskCache,
        todoTasksViewModel
      });
      todoTaskController.handleUpdateTodoTaskTitle("blabla", "yes");

      expect(storageSpy).toHaveBeenCalled();
      expect(todoTaskCache.getAllTodoTasks()).toEqual(result);
    });
  });
  describe("#getIsThereAnyTodoTaskCompleted", () => {
    describe("When pass todoTasks with", () => {
      describe("at least one is IsCompleted", () => {
        it("returns true", () => {
          const todoTasks: TodoTasks = [
            {
              id: "blabla",
              title: "test",
              isCompleted: true,
            },
            {
              id: "blabl2",
              title: "test2",
              isCompleted: false,
            },
          ];

          function setTodoTasks(newTodoTasks: TodoTasks) {}

          const todoTaskController = makeTodoTaskController({
            todoTasks,
            updateTodoTasks: setTodoTasks,
            localStorage: todoTaskCache,
            todoTasksViewModel
          });
          const { getIsThereAnyTodoTaskCompleted } = todoTaskController;
          const newTodoTasks = getIsThereAnyTodoTaskCompleted();

          const expected: boolean = true;

          expect(newTodoTasks).toEqual(expected);
        });
      });
      describe("at none is IsCompleted", () => {
        it("returns false", () => {
          const todoTasks: TodoTasks = [
            {
              id: "blabla",
              title: "test",
              isCompleted: false,
            },
            {
              id: "blabl2",
              title: "test2",
              isCompleted: false,
            },
          ];

          function setTodoTasks(newTodoTasks: TodoTasks) {}

          const todoTaskController = makeTodoTaskController({
            todoTasks,
            updateTodoTasks: setTodoTasks,
            localStorage: todoTaskCache,
            todoTasksViewModel
          });
          const { getIsThereAnyTodoTaskCompleted } = todoTaskController;
          const newTodoTasks = getIsThereAnyTodoTaskCompleted();

          const expected: boolean = false;

          expect(newTodoTasks).toEqual(expected);
        });
      });
    });
  });
  describe("#getIsTodoTasksNotEmpty", () => {
    describe("When pass todoTasks with", () => {
      describe("0 todos tasks", () => {
        it("returns false", () => {
          const todoTasks: TodoTasks = [];

          function setTodoTasks(newTodoTasks: TodoTasks) {}

          const todoTaskController = makeTodoTaskController({
            todoTasks,
            updateTodoTasks: setTodoTasks,
            localStorage: todoTaskCache,
            todoTasksViewModel
          });
          const { getIsTodoTasksNotEmpty } = todoTaskController;

          const answer = getIsTodoTasksNotEmpty();

          const expected: boolean = false;

          expect(answer).toEqual(expected);
        });
      });
      describe("many todos tasks", () => {
        it("returns true", () => {
          const todoTasks: TodoTasks = [
            {
              id: "blabla",
              title: "test",
              isCompleted: false,
            },
            {
              id: "blabl2",
              title: "test2",
              isCompleted: false,
            },
          ];

          function setTodoTasks(newTodoTasks: TodoTasks) {}

          const todoTaskController = makeTodoTaskController({
            todoTasks,
            updateTodoTasks: setTodoTasks,
            localStorage: todoTaskCache,
            todoTasksViewModel
          });
          const { getIsTodoTasksNotEmpty } = todoTaskController;

          const answer = getIsTodoTasksNotEmpty();

          const expected: boolean = true;

          expect(answer).toEqual(expected);
        });
      });
    });
  });
  describe("#getOnlyActiveTodoTasks", () => {
    describe("When pass todoTasks with", () => {
      describe("isCompleted false", () => {
        it("returns only todoTasks with isCompleted false", () => {
          const todoTasks: TodoTasks = [
            {
              id: "blabla",
              title: "test",
              isCompleted: true,
            },
            {
              id: "blabl2",
              title: "test2",
              isCompleted: false,
            },
          ];

          function setTodoTasks(newTodoTasks: TodoTasks) {}

          const todoTaskController = makeTodoTaskController({
            todoTasks,
            updateTodoTasks: setTodoTasks,
            localStorage: todoTaskCache,
            todoTasksViewModel
          });
          const { getOnlyActiveTodoTasks } = todoTaskController;

          const newTodoTasks = getOnlyActiveTodoTasks();

          const expected: TodoTasks = [
            {
              id: "blabl2",
              title: "test2",
              isCompleted: false,
            },
          ];

          expect(newTodoTasks).toEqual(expected);
        });
      });
    });
  });
});
