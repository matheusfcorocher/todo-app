import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

describe("::Components ::Organisms ::Todo", () => {
  test('renders Todo', () => {
      render(<Todo />);
      const todo = screen.getByTestId("todo");
      expect(todo).toMatchSnapshot();
  })
})