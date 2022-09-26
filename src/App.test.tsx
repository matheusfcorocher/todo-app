import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe("::App", () => {
  describe("When user type title of todo", () => {
    test('renders TodoItem', () => {
        render(<App />);
        const input = screen.getByPlaceholderText('What needs to be done?');
        userEvent.click(input);
        userEvent.type(input, 'clean dishes{enter}');
        const todoItem = screen.getByTestId(/todoItem-/i);
        const inputTodoItem = within(todoItem).getByRole("textbox");
        expect(inputTodoItem).toHaveValue('clean dishes');
    })
  })
})