import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

describe("::Components ::Organisms ::Todo", () => {
  test('renders Todo', () => {
      render(<Todo handleCreateTodo={function (title: string): void {
        throw new Error('Function not implemented.');
      } } handleDeleteTodo={function (id: string): void {
        throw new Error('Function not implemented.');
      } } />);
      const todo = screen.getByTestId("todo");
      expect(todo).toMatchSnapshot();
  })
})