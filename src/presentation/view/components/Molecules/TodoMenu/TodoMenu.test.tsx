import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoMenu from './TodoMenu';
import { TodoTasks } from '../../../../../domain/entities/TodoTask';

describe("::Components ::Molecules ::TodoMenu", () => {
  test('renders TodoMenu', () => {
    render(<TodoMenu todoTaskController={{
      getTodoTasks(): TodoTasks {
        return [];
      },
      getIsAllTodoTaskCompleted(): boolean {
        return true;
      },
      getIsThereAnyTodoTaskCompleted(): boolean {
        return true;
      },
      getIsTodoTasksNotEmpty(): boolean {
        return true;
      },
      getOnlyActiveTodoTasks(): TodoTasks {
        return [];
      },
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
    }}
    />);
    const todoMenu = screen.getByRole("group");
    expect(todoMenu).toMatchSnapshot();
  })
})