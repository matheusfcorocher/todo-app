import React from 'react';
import { cleanup, render, screen, within } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe("::App", () => {
  beforeEach(() => {
    cleanup();
  })

  describe("When user type title of todo", () => {
    test('App renders TodoItem', () => {
      render(<App />);
      const input = screen.getByPlaceholderText('What needs to be done?');
      userEvent.click(input);
      userEvent.type(input, 'clean dishes{enter}');
      const todoItem = screen.getByTestId(/todoItem-/i);
      const inputTodoItem = within(todoItem).getByRole("textbox");
      expect(inputTodoItem).toHaveValue('clean dishes');
    })
  })
  describe("When user delete a todo", () => {
    beforeEach(() => {
      render(<App />);
      const input = screen.getByPlaceholderText('What needs to be done?');
      userEvent.click(input);
      userEvent.type(input, 'test1{enter}');
      userEvent.click(input);
      userEvent.type(input, 'test2{enter}');
    })
    test('it only removes selected todoItem', () => {
      const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
      const deleteButton = within(oldTodoItems[0]).getByRole("button");
      userEvent.click(deleteButton)
      const newTodoItems = screen.getAllByTestId(/todoItem-/i);
      expect(newTodoItems.length).toBe(1);
    })
  })

  describe("When user update todo title", () => {
    beforeEach(() => {
      render(<App />);
      const input = screen.getByPlaceholderText('What needs to be done?');
      userEvent.click(input);
      userEvent.type(input, 'test1{enter}');
      userEvent.click(input);
      userEvent.type(input, 'test2{enter}');
    })
    describe("it only updates selected todoItem", () => {
      test('the selected todoItem is updated', () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const input = within(oldTodoItems[0]).getByRole("textbox");
        userEvent.click(input);
        userEvent.type(input, '{backspace>4}otal{enter}');

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        const inputTodoItem = within(newTodoItems[0]).getByRole("textbox");
        expect(inputTodoItem).toHaveValue('total');
      })
      test('others todoItems remain the same', () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const input = within(oldTodoItems[0]).getByRole("textbox");
        userEvent.click(input);
        userEvent.type(input, '{backspace>4}otal{enter}');

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        expect(oldTodoItems[1]).toBe(newTodoItems[1]);
      })
    })
    describe("if user delete all letters", () => {
      test('it removes todo', () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const input = within(oldTodoItems[0]).getByRole("textbox");
        userEvent.click(input)
        userEvent.type(input, '{backspace>5}');

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        expect(newTodoItems.length).toBe(1);
      })
    });
    describe("if user clicks out of input", () => {
      test('update still remain', () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const input = within(oldTodoItems[0]).getByRole("textbox");
        userEvent.click(input)
        userEvent.type(input, '{backspace>4}est 3');
        userEvent.click(screen.getAllByRole("group")[0]);

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        const inputTodoItem = within(newTodoItems[0]).getByRole("textbox");
        expect(inputTodoItem).toHaveValue('test 3');
      })
    });
    describe("if user presses {enter} of keyboard", () => {
      test('update still remain', () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const input = within(oldTodoItems[0]).getByRole("textbox");
        userEvent.click(input);
        userEvent.type(input, '{backspace>4}est 3{enter}');

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        const inputTodoItem = within(newTodoItems[0]).getByRole("textbox");
        expect(inputTodoItem).toHaveValue('test 3');
      })
    });
  })

  describe("When user update todo state", () => {
    beforeEach(() => {
      render(<App />);
      const input = screen.getByPlaceholderText('What needs to be done?');
      userEvent.click(input);
      userEvent.type(input, 'test1{enter}');
      userEvent.click(input);
      userEvent.type(input, 'test2{enter}');
    })
    describe("it only updates selected todoItem", () => {
      test('the selected todoItem is updated', () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const checkbox = within(oldTodoItems[0]).getByRole("checkbox");
        userEvent.click(checkbox);

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        const checkboxTodoItem = within(newTodoItems[0]).getByRole("checkbox");
        expect(checkboxTodoItem).toBeChecked();
      })
      test('others todoItems remain the same', () => {
        const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
        const checkbox = within(oldTodoItems[0]).getByRole("checkbox");
        userEvent.click(checkbox);

        const newTodoItems = screen.getAllByTestId(/todoItem-/i);
        expect(oldTodoItems[1]).toBe(newTodoItems[1]);
      })
    })
  })
})