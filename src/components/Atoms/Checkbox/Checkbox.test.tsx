import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Checkbox from './Checkbox';

describe("::Components ::Atoms ::Checkbox", () => {
    test('renders Checkbox', () => {
        render(<Checkbox handleOnChange={function (): void {
            throw new Error('Function not implemented.');
        } } checked={false} />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toMatchSnapshot();
    })
})
