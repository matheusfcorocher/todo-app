import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoFooter from './TodoFooter';

describe("::Components ::Molecules ::TodoFooter", () => {
  test('renders TodoFooter', () => {
      render(<TodoFooter isThereAnyTodoTaskCompleted={false} activeTodoTasksQuantity={0} handleFilter={function (isCompleted?: boolean | undefined): void {
        throw new Error('Function not implemented.');
      } } todoTaskController={{
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
      }}/>);
      const todoFooter = screen.getByRole("group");
      expect(todoFooter).toMatchSnapshot();
  })
})