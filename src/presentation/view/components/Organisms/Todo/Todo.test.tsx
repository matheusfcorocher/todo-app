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
      isThereAnyTodoTaskCompleted(): boolean{
        return true;
      },
      isTodoTasksNotEmpty(): boolean {
        return true;
      },
      returnOnlyActiveTodoTasks(): TodoTasks {
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
    }} handleFilter={function (isCompleted?: boolean | undefined): void {
      throw new Error('Function not implemented.');
    } }/>);
    const todo = screen.getByTestId("todo");
    expect(todo).toMatchSnapshot();
  })
})