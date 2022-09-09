import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe("::Components ::Molecules ::TodoList", () => {
  test('renders TodoList', () => {
      render(<TodoList />);
      const todoList = screen.getByRole("list");
      expect(todoList).toMatchSnapshot();
  })
})