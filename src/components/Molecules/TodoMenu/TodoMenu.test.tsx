import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoMenu from './TodoMenu';

describe("::Components ::Molecules ::TodoMenu", () => {
  test('renders TodoMenu', () => {
      render(<TodoMenu handleCreateTodo={function (): void {
        throw new Error('Function not implemented.');
      } } isAllTodosCompleted={false} handleCompleteAllTodoItems={function (): void {
        throw new Error('Function not implemented.');
      } } handleIncompleteAllTodoItems={function (): void {
        throw new Error('Function not implemented.');
      } } />);
      const todoMenu = screen.getByRole("group");
      expect(todoMenu).toMatchSnapshot();
  })
})