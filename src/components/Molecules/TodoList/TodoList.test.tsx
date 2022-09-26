import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe("::Components ::Molecules ::TodoList", () => {
  test('renders TodoList', () => {
      render(<TodoList handleDeleteTodo={function (id: string): void {
        throw new Error('Function not implemented.');
      } } handleUpdateTodoTitle={function (id: string, title: string): void {
        throw new Error('Function not implemented.');
      } } />);
      const todoList = screen.getByRole("list");
      expect(todoList).toMatchSnapshot();
  })
})