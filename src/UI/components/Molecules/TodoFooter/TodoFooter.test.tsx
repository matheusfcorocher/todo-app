import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoFooter from './TodoFooter';

describe("::Components ::Molecules ::TodoFooter", () => {
  test('renders TodoFooter', () => {
      render(<TodoFooter todosQuantity={0} />);
      const todoFooter = screen.getByRole("group");
      expect(todoFooter).toMatchSnapshot();
  })
})