import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoMenu from './TodoMenu';

describe("::Components ::Molecules ::TodoMenu", () => {
  test('renders TodoMenu', () => {
      render(<TodoMenu todoTaskController={{
        handleAddTodoTask: function (title: string): void {
          throw new Error('Function not implemented.');
        },
        handleDeleteTodoTask: function (id: string): void {
          throw new Error('Function not implemented.');
        },
        handleUpdateTodoTaskTitle: function (id: string, newTitle: string): void {
          throw new Error('Function not implemented.');
        },
        handleUpdateTodoTaskState: function (id: string, state: boolean): void {
          throw new Error('Function not implemented.');
        },
        handleCompleteAllTodoTasks: function (): void {
          throw new Error('Function not implemented.');
        },
        handleIncompleteAllTodoTasks: function (): void {
          throw new Error('Function not implemented.');
        },
        handleDeleteAllCompletedTodoTasks: function (): void {
          throw new Error('Function not implemented.');
        }
      }} isAllTodosCompleted={false}/>);
      const todoMenu = screen.getByRole("group");
      expect(todoMenu).toMatchSnapshot();
  })
})