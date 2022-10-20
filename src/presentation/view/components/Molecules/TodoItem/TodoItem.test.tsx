import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import userEvent from '@testing-library/user-event';
import { TodoTasks } from '../../../../../domain/entities/TodoTask';

describe("::Components ::TodoItem", () => {

  afterEach(() => {
    cleanup();
  })

  describe("When TodoItem isn't completed", () => {
    beforeEach(() => {
      render(
        <TodoItem task={{
          id: "1",
          title: "wash dishes",
          isCompleted: false,
        }} todoTaskController={{
          getTodoTasks(): TodoTasks {
            return [];
          },
          getIsThereAnyTodoTaskCompleted(): boolean{
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
        }}/>);
    })
    test('renders checkbox unchecked', () => {
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
    })
    test('renders title of TodoItem', () => {
      const title = screen.getByRole("textbox");
      expect(title).toBeInTheDocument();
      expect(title).toHaveValue("wash dishes");
    })
    test('renders delete button when hover TodoItem', () => {
      const deleteButton = screen.getByRole(/button/i);
      const todoItem = screen.getByTestId(/todoItem-/i);
      userEvent.hover(todoItem);
      expect(deleteButton).toBeVisible();
    })
  });
  describe('When TodoItem has COMPLETE state', () => {
    beforeEach(() => {
      render(
        <TodoItem task={{
          id: "1",
          title: "wash dishes",
          isCompleted: true,
        }} todoTaskController={{
          getTodoTasks(): TodoTasks {
            return [];
          },
          getIsThereAnyTodoTaskCompleted(): boolean{
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
        }}        />);
    })
    test('renders checkbox checked', () => {
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeChecked();
    })
    test('renders title of TodoItem', () => {
      const title = screen.getByRole("textbox");
      expect(title).toBeInTheDocument();
      expect(title).toHaveValue("wash dishes");
    })
    test('renders delete button when hover TodoItem', () => {
      const deleteButton = screen.getByRole(/button/i);
      const todoItem = screen.getByTestId(/todoItem-/i);
      userEvent.hover(todoItem);
      expect(deleteButton).toBeVisible();
    })
  });
  describe('When TodoItem has EDITING state', () => {
    beforeEach(() => {
      render(
        <TodoItem task={{
          id: "1",
          title: "wash dishes",
          isCompleted: false,
        }} todoTaskController={{
          getTodoTasks(): TodoTasks {
            return [];
          },
          getIsThereAnyTodoTaskCompleted(): boolean{
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
        }}        />);
    })
    test('delete button isnt showing', () => {
      const deleteButton = screen.getByRole("button", { name: "delete" });
      const input = screen.getByRole("textbox");
      userEvent.click(input);
      expect(deleteButton).not.toBeVisible();
    });
  });
  describe('When title of TodoItem is too long', () => {
    beforeEach(() => {
      render(
        <TodoItem task={{
          id: "1",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan suscipit turpis vel volutpat. In vitae aliquam ex. Nullam in odio pellentesque, feugiat libero vel, fringilla massa. Duis nec odio in nisl fringilla vestibulum at feugiat lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          isCompleted: false,
        }} todoTaskController={{
          getTodoTasks(): TodoTasks {
            return [];
          },
          getIsThereAnyTodoTaskCompleted(): boolean{
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
        }}/>);
    })
    test('renders title of TodoItem with ellipsis', () => {
      const input = screen.getByRole("textbox");
      expect(input).toMatchSnapshot();
    })
  });
})
