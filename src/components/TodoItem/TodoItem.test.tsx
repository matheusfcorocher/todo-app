import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import userEvent from '@testing-library/user-event';

describe("::Components ::TodoItem", () => {
  describe("When TodoItem isn't completed", () => {
    render(
      <TodoItem task={{
        id: "1",
        title: "wash dishes",
        isCompleted: false,
      }}
        handleUpdateTodoItemTitle={function (newTitle: string): void {
          throw new Error('Function not implemented.');
        }}
        handleUpdateTodoItemState={function (newState: boolean): void {
          throw new Error('Function not implemented.');
        }}
        handleDeleteTodoItem={function (newState: string): void {
          throw new Error('Function not implemented.');
        }} />);
    test('renders checkbox unchecked', () => {
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
    })
    // test('renders title of TodoItem', () => {
    //   const title = screen.getByLabelText(/wash dishes/i);
    //   expect(title).toBeInTheDocument();
    // })
    // test('renders delete button when hover TodoItem', () => {
    //   const linkElement = screen.getByLabelText(/TASK/i);
    //   expect(linkElement).toBeInTheDocument();
    // })
  });
  // describe('When TodoItem has COMPLETE state', () => {
  //   test('renders checkbox checked', () => {
  //     render(
  //       <TodoItem task={{
  //         id: "1",
  //         title: "TASK",
  //         isCompleted: true,
  //       }}
  //         handleUpdateTodoItemTitle={function (newTitle: string): void {
  //           throw new Error('Function not implemented.');
  //         }}
  //         handleUpdateTodoItemState={function (newState: boolean): void {
  //           throw new Error('Function not implemented.');
  //         }}
  //         handleDeleteTodoItem={function (newState: string): void {
  //           throw new Error('Function not implemented.');
  //         }} />);
  //     const linkElement = screen.getByLabelText(/TASK/i);
  //     expect(linkElement).toBeInTheDocument();
  //   })
  //   test('renders title of TodoItem', () => {
  //     render(
  //       <TodoItem task={{
  //         id: "1",
  //         title: "TASK",
  //         isCompleted: true,
  //       }}
  //         handleUpdateTodoItemTitle={function (newTitle: string): void {
  //           throw new Error('Function not implemented.');
  //         }}
  //         handleUpdateTodoItemState={function (newState: boolean): void {
  //           throw new Error('Function not implemented.');
  //         }}
  //         handleDeleteTodoItem={function (newState: string): void {
  //           throw new Error('Function not implemented.');
  //         }} />);
  //     const linkElement = screen.getByLabelText(/TASK/i);
  //     expect(linkElement).toBeInTheDocument();
  //   })
  //   test('renders delete button when hover TodoItem', () => {
  //     render(
  //       <TodoItem task={{
  //         id: "1",
  //         title: "TASK",
  //         isCompleted: true,
  //       }}
  //         handleUpdateTodoItemTitle={function (newTitle: string): void {
  //           throw new Error('Function not implemented.');
  //         }}
  //         handleUpdateTodoItemState={function (newState: boolean): void {
  //           throw new Error('Function not implemented.');
  //         }}
  //         handleDeleteTodoItem={function (newState: string): void {
  //           throw new Error('Function not implemented.');
  //         }} />);
  //     const linkElement = screen.getByLabelText(/TASK/i);
  //     expect(linkElement).toBeInTheDocument();
  //   })
  // });
  // describe('When TodoItem has EDITING state', () => {
  //   test('renders title of TodoItem is editing', () => {
  //     render(<TodoItem task={{
  //       id: "1",
  //       title: "TASK",
  //       state: "ACTIVE",
  //     }}
  //       handleUpdateTodoItemTitle={function (newTitle: string): void {
  //         throw new Error('Function not implemented.');
  //       }}
  //       handleUpdateTodoItemState={function (newState: string): void {
  //         throw new Error('Function not implemented.');
  //       }}
  //       handleDeleteTodoItem={function (newState: string): void {
  //         throw new Error('Function not implemented.');
  //       }} />);
  //     const linkElement = screen.getByLabelText(/TASK/i);
  //     expect(linkElement).toBeInTheDocument();
  //   })
  // });
  // describe('When title of TodoItem is too long', () => {
  //   test('renders title of TodoItem with ellipsis', () => {
  //     render(<TodoItem task={{
  //       id: "1",
  //       title: "TASK",
  //       state: "ACTIVE",
  //     }}
  //       handleUpdateTodoItemTitle={function (newTitle: string): void {
  //         throw new Error('Function not implemented.');
  //       }}
  //       handleUpdateTodoItemState={function (newState: string): void {
  //         throw new Error('Function not implemented.');
  //       }}
  //       handleDeleteTodoItem={function (newState: string): void {
  //         throw new Error('Function not implemented.');
  //       }} />);
  //     const linkElement = screen.getByLabelText(/TASK/i);
  //     expect(linkElement).toBeInTheDocument();
  //   })
  // });
})
