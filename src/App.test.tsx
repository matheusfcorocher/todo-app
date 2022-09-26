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
    test('it renders TodoItems', () => {
        const todoItems = screen.getAllByTestId(/todoItem-/i);
        expect(todoItems.length).toBe(2);
    })
    test('it only removes selected todoItem', () => {
      const oldTodoItems = screen.getAllByTestId(/todoItem-/i);
      const deleteButton = within(oldTodoItems[0]).getByRole("button");
      userEvent.click(deleteButton)
      const newTodoItems = screen.getAllByTestId(/todoItem-/i);
      expect(newTodoItems.length).toBe(1);
  })
  })
})