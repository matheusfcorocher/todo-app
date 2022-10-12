import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoFooter from './TodoFooter';

describe("::Components ::Molecules ::TodoFooter", () => {
  test('renders TodoFooter', () => {
      render(<TodoFooter todosQuantity={0} handleFilter={function (isCompleted?: boolean | undefined): void {
        throw new Error('Function not implemented.');
      } } />);
      const todoFooter = screen.getByRole("group");
      expect(todoFooter).toMatchSnapshot();
  })
})