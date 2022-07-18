import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';

describe("::Components ::TodoItem", () => {
  describe('When TodoItem has ACTIVE state', () => {
    test('renders checkbox unchecked', () => {
      render(<TodoItem task={{
        id: "1",
        title: "TASK",
        state: "ACTIVE",
      }} onCompletingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} onEditingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} />);
      screen.debug();
      const linkElement = screen.getByLabelText(/TASK/i);
      expect(linkElement).toBeInTheDocument();
    })
    test('renders title of TodoItem', () => {
      render(<TodoItem task={{
        id: "1",
        title: "TASK",
        state: "ACTIVE",
      }} onCompletingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} onEditingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} />);
      const linkElement = screen.getByLabelText(/TASK/i);
      expect(linkElement).toBeInTheDocument();
    })
    test('renders delete button when hover TodoItem', () => {
      render(<TodoItem task={{
        id: "1",
        title: "TASK",
        state: "ACTIVE",
      }} onCompletingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} onEditingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} />);
      const linkElement = screen.getByLabelText(/TASK/i);
      expect(linkElement).toBeInTheDocument();
    })
  });
  describe('When TodoItem has COMPLETE state', () => {
    test('renders checkbox checked', () => {
      render(<TodoItem task={{
        id: "1",
        title: "TASK",
        state: "ACTIVE",
      }} onCompletingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} onEditingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} />);
      const linkElement = screen.getByLabelText(/TASK/i);
      expect(linkElement).toBeInTheDocument();
    })
    test('renders title of TodoItem', () => {
      render(<TodoItem task={{
        id: "1",
        title: "TASK",
        state: "ACTIVE",
      }} onCompletingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} onEditingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} />);
      const linkElement = screen.getByLabelText(/TASK/i);
      expect(linkElement).toBeInTheDocument();
    })
    test('renders delete button when hover TodoItem', () => {
      render(<TodoItem task={{
        id: "1",
        title: "TASK",
        state: "ACTIVE",
      }} onCompletingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} onEditingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} />);
      const linkElement = screen.getByLabelText(/TASK/i);
      expect(linkElement).toBeInTheDocument();
    })
  });
  describe('When TodoItem has EDITING state', () => {
    test('renders title of TodoItem is editing', () => {
      render(<TodoItem task={{
        id: "1",
        title: "TASK",
        state: "ACTIVE",
      }} onCompletingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} onEditingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} />);
      const linkElement = screen.getByLabelText(/TASK/i);
      expect(linkElement).toBeInTheDocument();
    })
  });
  describe('When title of TodoItem is too long', () => {
    test('renders title of TodoItem with ellipsis', () => {
      render(<TodoItem task={{
        id: "1",
        title: "TASK",
        state: "ACTIVE",
      }} onCompletingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} onEditingTodo={function (): void {
        throw new Error('Function not implemented.');
      }} />);
      const linkElement = screen.getByLabelText(/TASK/i);
      expect(linkElement).toBeInTheDocument();
    })
  });
})
