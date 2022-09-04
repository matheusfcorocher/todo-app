import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './Todo';

test('renders TodoList', () => {
  render(<App />);
  const linkElement = screen.getByRole("textbox");
  expect(linkElement).toBeInTheDocument();
});
