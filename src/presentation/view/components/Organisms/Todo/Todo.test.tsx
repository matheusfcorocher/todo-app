import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';
import { TodoTasks } from '../../../../../domain/entities/TodoTask';

describe("::Components ::Organisms ::Todo", () => {
  test('renders Todo', () => {
    render(<Todo todoTaskController={{
      getTodoTasks(): TodoTasks {
        return [];
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
    }} isCompletedFilterController={{
      getIsCompletedFilter: function (): boolean | undefined {
        return true;
      },
      getFilterByUrlHash: function (hash: string): boolean | undefined {
        return true;
      },
      handleChangeFilter: function (isCompleted?: boolean | undefined): void {
        throw new Error('Function not implemented.');
      }
    }}/>);
    const todo = screen.getByTestId("todo");
    expect(todo).toMatchSnapshot();
  })
})