import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoView from './TodoView';

describe("::Components ::Organisms ::TodoView", () => {
  test('renders Todo', () => {
      render(<TodoView handleCreateTodo={function (title: string): void {
        throw new Error('Function not implemented.');
      } } handleDeleteTodo={function (id: string): void {
        throw new Error('Function not implemented.');
      } } handleUpdateTodoTitle={function (id: string, title: string): void {
        throw new Error('Function not implemented.');
      } } handleUpdateTodoState={function (id: string, state: boolean): void {
        throw new Error('Function not implemented.');
      } } handleCompleteAllTodoItems={function (): void {
        throw new Error('Function not implemented.');
      } } handleIncompleteAllTodoItems={function (): void {
        throw new Error('Function not implemented.');
      } } />);
      const todo = screen.getByTestId("todo");
      expect(todo).toMatchSnapshot();
  })
})