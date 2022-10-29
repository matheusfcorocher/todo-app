import React from "react";
import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { todoTaskCache } from "./infra/cache/TodoTaskCache";
import { Globals } from "@react-spring/web";
import { act } from "react-dom/test-utils";

Globals.assign({ skipAnimation: true });

describe("::App", () => {
  beforeEach(() => {
    cleanup();
    todoTaskCache.clear();
  });

  describe("When user type title of todo", () => {
    test("App renders TodoItem", async () => {
      await act(() => {
        render(<App />);
      });
      const input = screen.getByPlaceholderText("What needs to be done?");

      await act(() => {
        userEvent.click(input);
        userEvent.type(input, "clean dishes{enter}");
      });

      const todoItem = screen.getByTestId(/todoItem-/i);
      const inputTodoItem = within(todoItem).getByRole("textbox");
      expect(inputTodoItem).toHaveValue("clean dishes");
    });
  });
  describe("When user delete a todo", () => {
    beforeEach(async () => {
      await act(() => {
        render(<App />);
      });
      const input = screen.getByPlaceholderText("What needs to be done?");
      await act(() => {
        userEvent.click(input);
        userEvent.type(input, "test1{enter}");
        userEvent.click(input);
        userEvent.type(input, "test2{enter}");
      });
    });
    test("it only removes selected todoItem", async () => {
      const oldTodoItems = await screen.findAllByTestId(/todoItem-/i);
      const deleteButton = within(oldTodoItems[0]).getByRole("button");
      await act(() => {
        userEvent.click(deleteButton);
      });

      await waitFor(async () => {
        const newTodoItems = await screen.findAllByTestId(/todoItem-/i);
        expect(newTodoItems.length).toBe(1);
      });
    });
  });

  describe("When user update todo title", () => {
    beforeEach(async () => {
      await act(() => {
        render(<App />);
      });
      const input = screen.getByPlaceholderText("What needs to be done?");
      await act(() => {
        userEvent.click(input);
        userEvent.type(input, "test1{enter}");
        userEvent.click(input);
        userEvent.type(input, "test2{enter}");
      });
    });
    describe("it only updates selected todoItem", () => {
      test("the selected todoItem is updated", async () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const input = within(oldTodoItems[0]).getByRole("textbox");
        await act(() => {
          userEvent.click(input);
          userEvent.type(input, "{backspace>4}otal{enter}");
        });

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        const inputTodoItem = within(newTodoItems[0]).getByRole("textbox");
        expect(inputTodoItem).toHaveValue("total");
      });
      test("others todoItems remain the same", async () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const input = within(oldTodoItems[0]).getByRole("textbox");
        await act(() => {
          userEvent.click(input);
          userEvent.type(input, "{backspace>4}otal{enter}");
        });

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        expect(oldTodoItems[1]).toBe(newTodoItems[1]);
      });
    });
    describe("if user delete all letters and exits focus of input", () => {
      test("it removes todo", async () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const input = within(oldTodoItems[0]).getByRole("textbox");
        await act(() => {
          userEvent.click(input);
          userEvent.type(input, "{backspace>5}");
          userEvent.click(screen.getAllByRole("group")[0]);
        });

        await waitFor(async () => {
          const newTodoItems = await screen.findAllByTestId(/todoItem-/i);
          expect(newTodoItems.length).toBe(1);
        });
      });
    });
    describe("if user clicks out of input", () => {
      test("update still remain", async () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const input = within(oldTodoItems[0]).getByRole("textbox");

        await act(() => {
          userEvent.click(input);
          userEvent.type(input, "{backspace>4}est 3");
          userEvent.click(screen.getAllByRole("group")[0]);
        });

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        const inputTodoItem = within(newTodoItems[0]).getByRole("textbox");
        expect(inputTodoItem).toHaveValue("test 3");
      });
    });
    describe("if user presses {enter} of keyboard", () => {
      test("update still remain", async () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const input = within(oldTodoItems[0]).getByRole("textbox");

        await act(() => {
          userEvent.click(input);
          userEvent.type(input, "{backspace>4}est 3{enter}");
        });

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        const inputTodoItem = within(newTodoItems[0]).getByRole("textbox");
        expect(inputTodoItem).toHaveValue("test 3");
      });
    });
  });

  describe("When user update todo state", () => {
    beforeEach(async () => {
      await act(() => {
        render(<App />);
      });
      const input = screen.getByPlaceholderText("What needs to be done?");
      await act(() => {
        userEvent.click(input);
        userEvent.type(input, "test1{enter}");
        userEvent.click(input);
        userEvent.type(input, "test2{enter}");
      });
    });
    describe("it only updates selected todoItem", () => {
      test("the selected todoItem is updated", async () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const checkbox = within(oldTodoItems[0]).getByRole("checkbox");
        await act(() => {
          userEvent.click(checkbox);
        });

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        const checkboxTodoItem = within(newTodoItems[0]).getByRole("checkbox");
        expect(checkboxTodoItem).toBeChecked();
      });
      test("others todoItems remain the same", async () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const checkbox = within(oldTodoItems[0]).getByRole("checkbox");
        await act(() => {
          userEvent.click(checkbox);
        });

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        expect(oldTodoItems[1]).toBe(newTodoItems[1]);
      });
    });
  });

  describe("When user complete all todos", () => {
    beforeEach(async () => {
      await act(() => {
        render(<App />);
      });
      const input = screen.getByPlaceholderText("What needs to be done?");
      await act(() => {
        userEvent.click(input);
        userEvent.type(input, "test1{enter}");
        userEvent.click(input);
        userEvent.type(input, "test2{enter}");
      });
    });
    test("all todos are completed", async () => {
      const completeButton = screen.getByTitle("Check all todos");
      await act(() => {
        userEvent.click(completeButton);
      });

      const newTodoItems = screen.getAllByTestId(/todoItem-/i);
      const checkboxTodoItem = within(newTodoItems[0]).getByRole("checkbox");
      const checkboxTodoItem2 = within(newTodoItems[1]).getByRole("checkbox");

      expect(checkboxTodoItem).toBeChecked();
      expect(checkboxTodoItem2).toBeChecked();
    });
  });

  describe("When user incomplete all todos", () => {
    beforeEach(async () => {
      await act(() => {
        render(<App />);
      });
      const input = screen.getByPlaceholderText("What needs to be done?");
      await act(() => {
        userEvent.click(input);
        userEvent.type(input, "test1{enter}");
        userEvent.click(input);
        userEvent.type(input, "test2{enter}");
      });
    });
    test("all todos are incompleted", async () => {
      const completeButton = screen.getByTitle("Check all todos");
      await act(() => {
        userEvent.click(completeButton);
      });
      const incompleteButton = screen.getByTitle("Uncheck all todos");
      await act(() => {
        userEvent.click(incompleteButton);
      });

      const newTodoItems = screen.getAllByTestId(/todoItem-/i);
      const checkboxTodoItem = within(newTodoItems[0]).getByRole("checkbox");
      const checkboxTodoItem2 = within(newTodoItems[1]).getByRole("checkbox");

      expect(checkboxTodoItem).not.toBeChecked();
      expect(checkboxTodoItem2).not.toBeChecked();
    });
  });
  describe("When user is going to clear completed todos", () => {
    beforeEach(async () => {
      await act(() => {
        render(<App />);
      });
      const input = screen.getByPlaceholderText("What needs to be done?");
      await act(() => {
        userEvent.click(input);
        userEvent.type(input, "test1{enter}");
        userEvent.click(input);
        userEvent.type(input, "test2{enter}");
      });
    });
    describe("and he clicks in clear completed button", () => {
      test("returns only active todos", async () => {
        const oldTodoItems = await screen.findAllByTestId(/todoItem-/i);
        const checkbox = within(oldTodoItems[0]).getByRole("checkbox");
        
        await act(() => {
          userEvent.click(checkbox);
          const clearCompletedButton = screen.getByTitle("Clear Completed");
          userEvent.click(clearCompletedButton);
        });

        await waitFor(async () => {
          const newTodoItems = await screen.findAllByTestId(/todoItem-/i);
          expect(newTodoItems.length).toEqual(1);
        });
      });
    });
    describe("and doesn't have any completed todo tasks", () => {
      test("screen doesn't show Clear Completed button", () => {
        const clearCompletedButton = screen.queryByTitle("Clear Completed");
        expect(clearCompletedButton).toBeNull();
      });
    });
  });

  describe("When user wants to filter todos", () => {
    beforeEach(async () => {
      await act(() => {
        render(<App />);
      });
      const input = screen.getByPlaceholderText("What needs to be done?");
      await act(() => {
        userEvent.click(input);
        userEvent.type(input, "test1{enter}");
        userEvent.click(input);
        userEvent.type(input, "test2{enter}");
      });
    });
    describe("and he clicks in all filter", () => {
      test("returns all todos", async () => {
        const oldTodoItems = await screen.findAllByTestId(/todoItem-/i);
        const checkbox = within(oldTodoItems[0]).getByRole("checkbox");
        await act(() => {
          userEvent.click(checkbox);
        });

        const allFilterButton = screen.getByTitle("Filter all todo tasks");
        await act(() => {
          userEvent.click(allFilterButton);
        });

        await waitFor(async () => {
          const newTodoItems = await screen.findAllByTestId(/todoItem-/i);
          expect(newTodoItems.length).toEqual(2);
        });
      });
      test("returns correct url hash", async () => {
        const allFilterButton = await screen.findByTitle(
          "Filter all todo tasks"
        );
        expect(allFilterButton).toHaveAttribute("href", "#/");
      });
    });
    describe("and he clicks in active filter", () => {
      test("returns only active todos", async () => {
        const oldTodoItems = await screen.findAllByTestId(/todoItem-/i);
        const checkbox = within(oldTodoItems[0]).getByRole("checkbox");
        await act(() => {
          userEvent.click(checkbox);
        });

        const activeFilterButton = await screen.findByTitle(
          "Filter active todo tasks"
        );
        await act(() => {
          userEvent.click(activeFilterButton);
        });

        await waitFor(async () => {
          const newTodoItems = await screen.findAllByTestId(/todoItem-/i);
          expect(newTodoItems.length).toEqual(1);
        });
      });
      test("returns correct url hash", async () => {
        const activeFilterButton = await screen.findByTitle(
          "Filter active todo tasks"
        );
        expect(activeFilterButton).toHaveAttribute("href", "#/active");
      });
    });
    describe("and he clicks in completed filter", () => {
      test("returns only completed todos", async () => {
        const oldTodoItems = await screen.findAllByTestId(/todoItem-/i);
        const checkbox = within(oldTodoItems[0]).getByRole("checkbox");
        await act(() => {
          userEvent.click(checkbox);
        });

        const completedFilterButton = await screen.findByTitle(
          "Filter completed todo tasks"
        );
        await act(() => {
          userEvent.click(completedFilterButton);
        });

        await waitFor(async () => {
          const newTodoItems = await screen.findAllByTestId(/todoItem-/i);
          expect(newTodoItems.length).toEqual(1);
        });
      });
      test("returns correct url hash", async () => {
        const completedFilterButton = await screen.findByTitle("Filter completed todo tasks");
        expect(completedFilterButton).toHaveAttribute("href", "#/completed");
      });
    });
  });
});
